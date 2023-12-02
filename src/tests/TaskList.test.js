import React from "react";
import { render } from "@testing-library/react";
import TaskList from "../components/TaskList";

test("renders task list with given tasks", () => {
  const tasks = [
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: true },
  ];

  const { getByText } = render(
    <TaskList
      tasks={tasks}
      onComplete={() => {}}
      onDelete={() => {}}
      onEdit={() => {}}
    />
  );

  expect(getByText("Task 1")).toBeInTheDocument();
  expect(getByText("Task 2")).toBeInTheDocument();
});
