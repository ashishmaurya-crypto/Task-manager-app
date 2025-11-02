import React, { useState } from "react";
import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles.css";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div data-theme={theme}>
      <TaskProvider>
        <div className="app">
          <header className="header">
            <h1>Advanced Task Manager</h1>
            <button
              className="theme-toggle"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </header>
          <div className="panel">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </TaskProvider>
    </div>
  );
}
