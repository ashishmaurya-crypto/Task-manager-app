import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

const TaskForm = () => {
  const [text, setText] = useState("");
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      alert("Please enter a task!");
      return;
    }
    addTask(text);
    setText("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
