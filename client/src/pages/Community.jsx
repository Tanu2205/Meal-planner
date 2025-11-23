import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import Navbar from "../components/Navbar";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function CommunityFeedback() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [message, setMessage] = useState("");
  const [replyText, setReplyText] = useState({});
  const [ratingLocal, setRatingLocal] = useState({});
  const socketRef = useRef(null);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  /* ------------------- Load Feedback ------------------- */
  const loadFeedback = async () => {
    try {
      const res = await axios.get(`${API}/api/feedback`, {
        headers: { Authorization: token },
      });

      setFeedbackList(res.data);

      const userRatings = {};
      res.data.forEach((fb) => {
        const myRating = fb.ratings?.find(
          (r) => r.userId === (user?.id || user?._id)
        );
        if (myRating) userRatings[fb._id] = myRating.rating;
      });
      setRatingLocal(userRatings);
    } catch (err) {
      console.error("Load feedback error", err);
    }
  };

  /* ------------------- Socket Setup ------------------- */
  useEffect(() => {
    if (!token) return;
    loadFeedback();

    socketRef.current = io(API, {
      transports: ["websocket"],
      auth: { token },
    });

    socketRef.current.on("feedback:new", (fb) =>
      setFeedbackList((prev) => [fb, ...prev])
    );

    socketRef.current.on("feedback:reply", ({ feedbackId, reply }) =>
      setFeedbackList((prev) =>
        prev.map((f) =>
          f._id === feedbackId
            ? { ...f, replies: [...(f.replies || []), reply] }
            : f
        )
      )
    );

    socketRef.current.on("feedback:rating", ({ feedbackId, avgRating }) =>
      setFeedbackList((prev) =>
        prev.map((f) =>
          f._id === feedbackId ? { ...f, avgRating } : f
        )
      )
    );

    return () => socketRef.current?.disconnect();
  }, [token]);

  /* ------------------- Submit Handlers ------------------- */
  const submitFeedback = async () => {
    if (!message.trim()) return alert("Please write feedback.");
    try {
      await axios.post(
        `${API}/api/feedback`,
        { message, username: user?.username },
        { headers: { Authorization: token } }
      );
      setMessage("");
    } catch (err) {
      console.error(err);
      alert("Failed to submit feedback");
    }
  };

  const submitReply = async (feedbackId) => {
    const msg = (replyText[feedbackId] || "").trim();
    if (!msg) return;
    try {
      await axios.post(
        `${API}/api/feedback/${feedbackId}/reply`,
        { message: msg, username: user?.username },
        { headers: { Authorization: token } }
      );
      setReplyText((prev) => ({ ...prev, [feedbackId]: "" }));
    } catch (err) {
      console.error(err);
      alert("Failed to reply");
    }
  };

  const submitRating = async (feedbackId, value) => {
    try {
      await axios.post(
        `${API}/api/feedback/${feedbackId}/rate`,
        { rating: value },
        { headers: { Authorization: token } }
      );
      setRatingLocal((prev) => ({ ...prev, [feedbackId]: value }));
    } catch (err) {
      console.error(err);
      alert("Failed to rate");
    }
  };

  /* ------------------- Star Component ------------------- */
  const Star = ({ filled }) => (
    <svg
      className={`w-5 h-5 inline-block ${
        filled ? "text-yellow-400" : "text-gray-300"
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
    </svg>
  );

  /* ------------------- No Login Case ------------------- */
  if (!token) {
    return (
      <div className="ml-[60px] p-4 sm:p-6 max-w-full text-center ">
        <div className="fixed left-0 top-0 h-full w-[60px] md:w-[68px]">
          <Navbar />
        </div>
        <h2 className="text-xl font-semibold">
          Please login to access community feedback
        </h2>
      </div>
    );
  }

  /* ------------------- Main UI ------------------- */
  return (
    <div className="ml-[60px] md:ml-[68px] p-4 sm:p-6 max-w-full sm:max-w-4xl mx-auto ">

      {/* Navbar */}
      <div className="fixed left-0 top-0 h-full w-[60px] md:w-[68px] bg-white shadow-md">
        <Navbar />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 font-[Poppins] py-6 w-full">
        Community Feedback
      </h1>

      {/* WRITE FEEDBACK */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-green text-white flex items-center justify-center font-bold shrink-0">
            {user?.username?.charAt(0)?.toUpperCase() || "U"}
          </div>

          <div className="flex-1">
            <textarea
              className="w-full p-3 border rounded-lg text-sm"
              placeholder="Share your feedback..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div className="flex flex-col sm:flex-row justify-between mt-2 text-sm gap-2">
              <div className="text-gray-600">
                Posting as <strong>{user?.username}</strong>
              </div>

              <button
                onClick={submitFeedback}
                className="bg-green text-white px-4 py-2 rounded-lg text-sm"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FEEDBACK LIST */}
      <div className="space-y-4 mb-10">
        {feedbackList.map((fb) => (
          <div key={fb._id} className="bg-white shadow p-4 rounded-xl">

            <div className="flex gap-3">
              {/* Avatar */}
              <div className="w-10 h-10 shrink-0 rounded-full bg-green text-white flex items-center justify-center font-bold">
                {fb.user?.username?.charAt(0)?.toUpperCase() || "U"}
              </div>

              {/* Content */}
              <div className="flex-1">

                {/* Username + Avg Rating */}
                <div className="flex flex-col sm:flex-row justify-between">
                  <div>
                    <div className="font-semibold text-gray-800">
                      {fb.user?.username}
                    </div>
                    <div className="text-xs text-gray-500">
                      {new Date(fb.createdAt).toLocaleString()}
                    </div>
                  </div>

                  <div className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-0">
                    Avg: <strong>{fb.avgRating || "—"}</strong>
                  </div>
                </div>

                <p className="mt-2 text-gray-700 text-sm sm:text-base">
                  {fb.message}
                </p>

                {/* Rating Stars */}
                <div className="mt-3 flex items-center gap-1 flex-wrap">
                  {[1, 2, 3, 4, 5].map((n) => {
                    const filled = (ratingLocal[fb._id] || 0) >= n;
                    return (
                      <button
                        key={n}
                        onClick={() => submitRating(fb._id, n)}
                        className="focus:outline-none"
                      >
                        <Star filled={filled} />
                      </button>
                    );
                  })}
                  <div className="text-xs text-gray-500 ml-2">
                    ({fb.ratings?.length || 0} votes)
                  </div>
                </div>

                {/* Replies */}
                <div className="mt-3 space-y-2">
                  {(fb.replies || []).map((r) => (
                    <div key={r._id} className="bg-gray-50 p-3 rounded">
                      <div className="flex justify-between">
                        <div className="text-sm font-medium">
                          {r.user?.username}
                        </div>
                        <div className="text-xs text-gray-400">
                          {new Date(r.createdAt).toLocaleString()}
                        </div>
                      </div>
                      <div className="text-gray-700 text-sm mt-1">
                        {r.message}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Reply Box */}
                <div className="mt-3 flex flex-col sm:flex-row gap-2">
                  <input
                    placeholder="Write a reply..."
                    className="flex-1 p-2 border rounded text-sm"
                    value={replyText[fb._id] || ""}
                    onChange={(e) =>
                      setReplyText((prev) => ({
                        ...prev,
                        [fb._id]: e.target.value,
                      }))
                    }
                  />
                  <button
                    onClick={() => submitReply(fb._id)}
                    className="bg-blue text-white px-3 py-1 rounded text-sm"
                  >
                    Reply
                  </button>
                </div>

              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
