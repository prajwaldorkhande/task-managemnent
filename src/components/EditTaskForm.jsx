import React, { useState } from "react";
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

const EditTaskModal = ({ task, onUpdateTask, onCancel }) => {
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleTaskNameChange = (e) => {
    setEditedTask({ ...editedTask, name: e.target.value });
  };

  const handleTaskDescriptionChange = (e) => {
    setEditedTask({ ...editedTask, description: e.target.value });
  };

  const handlePriorityChange = (e) => {
    setEditedTask({ ...editedTask, priority: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateTask(editedTask);
  };

  return (
    <Modal isOpen={true} toggle={onCancel}>
      <ModalHeader toggle={onCancel}>Edit Task</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="editTaskName">Task Name</Label>
            <Input
              type="text"
              value={editedTask.name}
              onChange={handleTaskNameChange}
              id="editTaskName"
              placeholder="Enter Task Name"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="editTaskDescription">Task Description</Label>
            <Input
              type="textarea"
              value={editedTask.description}
              onChange={handleTaskDescriptionChange}
              id="editTaskDescription"
              placeholder="Enter Task Description"
            />
          </FormGroup>
          <FormGroup>
            <Label for="editPriority">Priority</Label>
            <Input
              type="select"
              value={editedTask.priority}
              onChange={handlePriorityChange}
              id="editPriority"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Input>
          </FormGroup>
          <Button type="submit" color="primary">
            Update Task
          </Button>
          <Button color="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default EditTaskModal;
