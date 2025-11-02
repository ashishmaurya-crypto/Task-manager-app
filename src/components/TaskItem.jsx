import React from "react";
import { useTasks } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-text" onClick={() => toggleTask(task.id)}>
        <span>{task.text}</span>
        <p className="time">{task.createdAt}</p>
      </div>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        🗑️
      </button>
    </div>
  );
};

export default React.memo(TaskItem);
