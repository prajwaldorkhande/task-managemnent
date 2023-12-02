import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditTaskForm from "../components/EditTaskForm";

test("updates a task", () => {
  const mockUpdateTask = jest.fn();
  const mockCancelEdit = jest.fn();

  const task = {
    id: 1,
    name: "Existing Task",
    description: "",
    priority: "medium",
    completed: false,
  };

  const { getByLabelText, getByText } = render(
    <EditTaskForm
      task={task}
      onUpdateTask={mockUpdateTask}
      onCancel={mockCancelEdit}
    />
  );

  const taskNameInput = getByLabelText("Task Name");
  const updateButton = getByText("Update Task");

  fireEvent.change(taskNameInput, { target: { value: "Updated Task" } });
  fireEvent.click(updateButton);

  expect(mockUpdateTask).toHaveBeenCalledWith({
    ...task,
    name: "Updated Task",
  });
});
