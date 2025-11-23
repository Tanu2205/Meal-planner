require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const https = require("https");

// Routes
const authRoutes = require("./routes/auth");
const mealsRoutes = require("./routes/meals");
const feedbackRoutes = require("./routes/feedback");

const app = express();
app.use(express.json());

// ============================================================
//                         CORS FIX (Express 5 Safe)
// ============================================================

const allowedOrigins = [
  "https://meal-planner-p9avk8b21-tanushri-sonis-projects.vercel.app",
  "https://meal-planner-nine-eta.vercel.app",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (
        origin.includes("vercel.app") ||
        origin === "http://localhost:5173"
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


// ❌ REMOVE THIS — it crashes Express 5
// app.options("(.*)", cors());

// ✔ Express 5 automatically handles OPTIONS preflight safely
// no wildcard route required

// ============================================================
//                     MONGODB CONNECTION
// ============================================================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// ============================================================
//                           ROUTES
// ============================================================

app.use("/api/auth", authRoutes);
app.use("/api/meals", mealsRoutes);
app.use("/api/feedback", feedbackRoutes);

// ============================================================
//                     NUTRITION API ROUTE
// ============================================================

app.post("/api/nutrition", async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Query text is required" });
  }

  try {
    const response = await axios.post(
      "https://app.avocavo.app/api/v2/nutrition/ingredient",
      { ingredient: query },
      {
        headers: {
          "X-API-Key": process.env.AVOCAVO_API_KEY,
          "Content-Type": "application/json",
        },
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
      }
    );

    const raw = response.data;
    const nutrition = raw.nutrition || {};

    res.json({
      calories: nutrition.calories || 0,
      protein: nutrition.protein || 0,
      carbs: nutrition.carbohydrates || 0,
      fat: nutrition.fat || 0,
      raw,
    });
  } catch (err) {
    console.error("Avocavo API Error:", err.response?.data || err.message);
    res.status(500).json({
      error: "Nutrition API Error",
      details: err.response?.data || err.message,
    });
  }
});

// ============================================================
//                REAL-TIME SERVER WITH SOCKET.IO
// ============================================================

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.set("io", io);

io.on("connection", (socket) => {
  console.log("⚡ Client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ Client disconnected:", socket.id);
  });
});

// ============================================================
//                 SAFE CATCH-ALL FOR UNKNOWN ROUTES
// ============================================================

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ============================================================
//                        START SERVER
// ============================================================

const PORT = process.env.PORT || 5000;
server.listen(PORT, () =>
  console.log(`Server running with Socket.IO on port ${PORT}`)
);
