import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useTasks();
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  return (
    <div className="task-list">
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>
      {filteredTasks.length ? (
        filteredTasks.map((t) => <TaskItem key={t.id} task={t} />)
      ) : (
        <p className="empty">No tasks to show</p>
      )}
    </div>
  );
};

export default TaskList;
