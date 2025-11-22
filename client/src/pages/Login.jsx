import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  

    const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // ✅ Use environment variable for production, fallback to localhost for dev
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

    const response = await axios.post(`${API_URL}/api/auth/login`, {
      email: form.email,
      password: form.password,
    });

    console.log("Login API Response:", response.data);

    // Extract data correctly
    const { token, user } = response.data;

    // Save in localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    alert("Login successful!");
    navigate("/"); // redirect to homepage
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    alert("Invalid login credentials");
  }
};

  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="flex flex-col items-center gap-6 bg-white p-8 rounded-lg shadow-lg w-96">
        {/* Illustration Section */}
        <div className="flex items-center justify-center space-x-3">
          
          <div className="bg-yellow-400 rounded-full p-2">
            <span role="img" aria-label="smiley" className="text-white text-3xl">
              😀
            </span>
          </div>
          
        </div>

        <h2 className="text-2xl font-semibold text-center text-gray-700">Welcome Back!</h2>
        <p className="text-center text-gray-500"></p>

        {/* Login Form */}
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          <input
            name="password"
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          <button className="bg-green rounded-full text-white p-3 hover:bg-green-600 focus:outline-none transition duration-200">
            Log in
          </button>
        </form>

        <div className="flex justify-between text-sm text-gray-500 w-full mt-4">
          <label>
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
          <a href="#" className="hover:text-green-500">
            Forgot password?
          </a>
        </div>

        

        <p className="text-center text-sm text-gray-500 mt-4">
          Not a member?{" "}
          <a href="/signup" className="text-green-500 font-semibold hover:text-green-600">
            Join now
          </a>
        </p>
      </div>
    </div>
  );
}
