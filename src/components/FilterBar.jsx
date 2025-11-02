import React from "react";

export default function FilterBar({ value, onChange }) {
  return (
    <div className="filter-bar" role="toolbar" aria-label="Task filters">
      <button className={value === "all" ? "active" : ""} onClick={() => onChange("all")}>All</button>
      <button className={value === "pending" ? "active" : ""} onClick={() => onChange("pending")}>Pending</button>
      <button className={value === "completed" ? "active" : ""} onClick={() => onChange("completed")}>Completed</button>
    </div>
  );
}
