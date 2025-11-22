import React, { useState } from "react";
import axios from "axios";

export default function ProfileEdit() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    height: user.height || "",
    weight: user.weight || "",
    healthGoal: user.healthGoal || "",
    diet: user.diet || "",
    favoriteFood: user.favoriteFood || "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    if (image) formData.append("profileImage", image);

    const res = await axios.put(
      `http://localhost:5000/api/user/update-profile/${user._id}`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    localStorage.setItem("user", JSON.stringify(res.data.user));
    alert("Profile Updated!");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input name="name" value={form.name} onChange={handleChange} className="w-full p-2 border" />

        <input name="height" value={form.height} onChange={handleChange} className="w-full p-2 border" />

        <input name="weight" value={form.weight} onChange={handleChange} className="w-full p-2 border" />

        <input name="healthGoal" value={form.healthGoal} onChange={handleChange} className="w-full p-2 border" />

        <input name="diet" value={form.diet} onChange={handleChange} className="w-full p-2 border" />

        <input name="favoriteFood" value={form.favoriteFood} onChange={handleChange} className="w-full p-2 border" />

        <input type="file" onChange={(e) => setImage(e.target.files[0])} />

        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Save
        </button>

      </form>
    </div>
  );
}
