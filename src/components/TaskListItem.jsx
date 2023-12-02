import React, { useState } from "react";
import {
  MdEdit,
  MdDelete,
  MdInfoOutline,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import "./TaskListItem.css"; // Assuming you have a CSS file for styling

const TaskListItem = ({ task, onComplete, onDelete, onEdit }) => {
  const { id, name, description, priority, completed } = task;
  const [showDetails, setShowDetails] = useState(false);

  const handleComplete = () => {
    onComplete(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    onEdit(id);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={`task-item ${completed ? "completed" : ""}`}>
      <div className="task-header">
        <label className="custom-checkbox">
          <input
            type="checkbox"
            checked={completed}
            onChange={handleComplete}
            id={`task-${id}`}
          />
          <span className="checkmark"></span>
        </label>
        <label htmlFor={`task-${id}`} className={completed ? "completed" : ""}>
          {name}
        </label>
        <div className="task-icons">
          <MdEdit
            className="icon edit-icon"
            onClick={handleEdit}
            title="Edit"
          />
          <MdDelete
            className="icon delete-icon"
            onClick={handleDelete}
            title="Delete"
          />
          {showDetails ? (
            <MdKeyboardArrowUp
              className="icon arrow-icon"
              onClick={toggleDetails}
              title="Hide Details"
              size={24}
            />
          ) : (
            <MdKeyboardArrowDown
              className="icon arrow-icon"
              onClick={toggleDetails}
              title="Show Details"
              size={24}
            />
          )}
        </div>
      </div>
      {showDetails && (
        <div className="task-details">
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Priority:</strong> {priority}
          </p>
          <p>
            <strong>Status:</strong> {completed ? "Completed" : "Pending"}
          </p>
        </div>
      )}
    </div>
  );
};

export default TaskListItem;
