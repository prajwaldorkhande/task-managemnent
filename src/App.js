import React, { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import EditTaskForm from "./components/EditTaskForm";
import { Button } from "reactstrap";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null); // State to manage the task being edited

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditingTask(taskToEdit);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const cancelEdit = () => {
    setEditingTask(null);
  };

  const sortByPriority = () => {
    const sortedTasks = [...tasks].sort((a, b) => {
      if (a.priority < b.priority) return -1;
      if (a.priority > b.priority) return 1;
      return 0;
    });
    setTasks([...sortedTasks]); // Use spread operator to create a new array
  };

  return (
    <div className="container mt-5">
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Task Management App
      </h1>
      <div
        className="task-sorting"
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <Button onClick={sortByPriority} color="dark">
          Sort by Priority
        </Button>
      </div>
      <AddTaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onComplete={completeTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />
      {editingTask && (
        <EditTaskForm
          task={editingTask}
          onUpdateTask={updateTask}
          onCancel={cancelEdit}
        />
      )}
    </div>
  );
};

export default App;
