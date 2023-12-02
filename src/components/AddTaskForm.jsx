import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const AddTaskForm = ({ onAddTask }) => {
  const [show, setShow] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const saveTasksToLocalStorage = (updatedTasks) => {
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === "") {
      return;
    }
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      description: taskDescription,
      priority,
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
    onAddTask(newTask);
    handleClose();
    // Reset form fields
    setTaskName("");
    setTaskDescription("");
    setPriority("low");
  };

  return (
    <>
      <Button
        color="primary"
        onClick={handleShow}
        style={{
          margin: "0 auto",
          display: "block",
          width: "100px",
        }}
      >
        Add Task
      </Button>

      <Modal isOpen={show} toggle={handleClose}>
        <ModalHeader toggle={handleClose}>Add Task</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="taskName">Task Name</Label>
              <Input
                type="text"
                value={taskName}
                onChange={handleTaskNameChange}
                id="taskName"
                placeholder="Enter Task Name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="taskDescription">Task Description</Label>
              <Input
                type="textarea"
                value={taskDescription}
                onChange={handleTaskDescriptionChange}
                id="taskDescription"
                placeholder="Enter Task Description"
              />
            </FormGroup>
            <FormGroup>
              <Label for="priority">Priority</Label>
              <Input
                type="select"
                value={priority}
                onChange={handlePriorityChange}
                id="priority"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Input>
            </FormGroup>
            <Button type="submit" color="primary">
              Add Task
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddTaskForm;
