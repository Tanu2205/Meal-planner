import axios from "axios";

export async function analyzeMeal(query) {
  try {
    const res = await axios.post("http://localhost:5000/api/nutrition", { query });
    console.log("Nutrition API response:", res.data);
    return res.data; 
  } catch (err) {
    console.error("Nutrition API error:", err.response?.data || err.message);
    throw err;
  }
}
