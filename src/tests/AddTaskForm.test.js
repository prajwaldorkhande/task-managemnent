import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddTaskForm from "../components/AddTaskForm";

test("adds a new task", () => {
  const mockAddTask = jest.fn();

  const { getByLabelText, getByText } = render(
    <AddTaskForm onAddTask={mockAddTask} />
  );

  const taskNameInput = getByLabelText("Task Name");
  const addButton = getByText("Add Task");

  fireEvent.change(taskNameInput, { target: { value: "New Task" } });
  fireEvent.click(addButton);

  expect(mockAddTask).toHaveBeenCalledWith({
    id: expect.any(Number),
    name: "New Task",
    description: "",
    priority: "low",
    completed: false,
  });
});
