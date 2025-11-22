import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: token },
        });
        setUser(res.data);
      } catch {
        navigate("/login");
      }
    };
    fetchUser();
  }, [navigate]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome, {user.username}!</h1>
      <p>Email: {user.email}</p>
      <button onClick={logout} className="mt-4 bg-red-500 text-white p-2">Logout</button>
    </div>
  );
}
