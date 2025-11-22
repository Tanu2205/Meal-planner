import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function analyzeMeal(query) {
  try {
    const res = await axios.post(`${API_URL}/api/nutrition`, { query });
    console.log("Nutrition API response:", res.data);
    return res.data;
  } catch (err) {
    console.error("Nutrition API error:", err.response?.data || err.message);
    throw err;
  }
}
