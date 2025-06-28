import { useEffect, useState } from 'react';
import './App.css';
import { getTodos } from './service/todos';
import AddForm from './components/AddForm';
import FilteredButton from './components/FilteredButton';
import TaskList from './components/TaskList';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const fetchTodos = async () => {
    try {
      const response = await getTodos(10);
      setTodos(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([newTask, ...todos]);
  };

  const onToggle = (id) => {
    setTodos(todos.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTodos(todos.filter(task => task.id !== id));
  };

  const filteredTasks = todos.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true; 
  });

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>📝 Task Manager</h1>
      <AddForm onAdd={addTask} />
      <FilteredButton setFilter={setFilter} />
      <TaskList tasks={filteredTasks} onToggle={onToggle} deleteTask={deleteTask} />
    </>
  );
}

export default App;
