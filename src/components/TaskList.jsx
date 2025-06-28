import React from 'react';
import TaskItem from './TaskItem'; 

const TaskList = ({ tasks, onToggle, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          deletetask={deleteTask} 
        />
      ))}
    </ul>
  );
};

export default TaskList;
