import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem("theme_mode");
    return saved || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("theme_mode", mode);
  }, [mode]);

  return (
    <div className="theme-toggle">
      <button onClick={() => setMode(m => m === "light" ? "dark" : "light")}>
        {mode === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
}
