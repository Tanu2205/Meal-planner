import axios from "axios";

export async function fetchDay(date) {
  const res = await axios.get(`/api/meals/${date}`);
  return res.data;
}

export async function addMealToDay(date, section, meal) {
  const res = await axios.post(`/api/meals/${date}/add`, { section, meal });
  return res.data;
}

export async function saveDay(date, payload) {
  const res = await axios.post(`/api/meals/${date}/save`, payload);
  return res.data;
}

export async function deleteMeal(date, section, mealId) {
  const res = await axios.delete(`/api/meals/${date}/${section}/${mealId}`);
  return res.data;
}
