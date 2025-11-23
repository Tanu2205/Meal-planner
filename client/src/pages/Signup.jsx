import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

      // ✅ Correct signup API + send all fields
      const response = await axios.post(`${API_URL}/api/auth/signup`, {
        username: form.username,
        email: form.email,
        password: form.password,
      });

      console.log("Signup API Response:", response.data);

      const { token, user } = response.data;

      // Save in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      alert("Signup successful!");
      navigate("/");
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="flex flex-col items-center gap-6 bg-white p-8 rounded-lg shadow-lg w-96">

        <div className="bg-yellow-400 rounded-full p-2">
          <span className="text-white text-3xl">😊</span>
        </div>

        <h2 className="text-2xl font-semibold text-gray-700 text-center">
          Create Account
        </h2>

        <p className="text-gray-500 text-center">
          Join us and start your journey towards healthy lifestyle.
        </p>

        {/* Signup Form */}
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            name="email"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            name="password"
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button className="bg-green rounded-full text-white p-3 hover:bg-blue-600 transition duration-200">
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <div className="text-blue-500 font-semibold hover:text-blue-600">
            <NavLink to="/signup">
                        Log in
                        </NavLink>
          </div>
        </p>
      </div>
    </div>
  );
}
