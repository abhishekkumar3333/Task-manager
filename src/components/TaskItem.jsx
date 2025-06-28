import React from 'react';

const TaskItem = ({ task, onToggle, deletetask }) => {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span className={task.completed ? "completed" : ""}>
        {task.title}
      </span>
      <button onClick={() => deletetask(task.id)}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
