import React from "react";
import { Card, CardBody } from "reactstrap";
import TaskListItem from "./TaskListItem";

const TaskList = ({ tasks, onComplete, onDelete, onEdit }) => {
  const cardStyle = {
    // Example styles for the Card component
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "20px",
    marginTop: "20px",
  };

  return (
    <Card style={cardStyle}>
      <CardBody>
        {tasks.map((task) => (
          <TaskListItem
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </CardBody>
    </Card>
  );
};

export default TaskList;
