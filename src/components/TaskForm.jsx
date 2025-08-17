import React, { useState } from 'react'
import './TaskForm.css'

function TaskForm() {
    const [task, setTask] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      if (task.trim()) {
        // Handle task submission logic here
        alert("task added")
        console.log(task)
        setTask("");
      }
    };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-input">Task:</label>
      <input
        type="text"
        id="task-input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter the task"
        autoComplete="off"
      />
      <button
        type="submit"
        className={task.trim().length === 0 ? "disable" : ""}
        disabled={task.trim().length === 0}
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm
