import React from "react";

export default function WeeklyPlanner({ selectedDay, onSelectDay }) {
  // Generate next 7 days from today (FE only)
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    const key = d.toISOString().slice(0, 10);
    days.push(key);
  }

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-6">
      <h3 className="font-semibold mb-2">Weekly Calendar</h3>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {days.map((day) => {
          const dateObj = new Date(day);
          const weekday = dateObj.toLocaleDateString("en-US", { weekday: "short" });
          const dayNum = dateObj.getDate();
          const active = day === selectedDay;

          return (
            <button
              key={day}
              onClick={() => onSelectDay(day)}
              className={`min-w-[70px] p-3 rounded-xl text-center transition
                ${active ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-700"}`}
            >
              <div className="text-xs">{weekday}</div>
              <div className="font-bold">{dayNum}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
