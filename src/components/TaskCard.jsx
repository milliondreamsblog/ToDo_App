import React from "react";
import "./TaskCard.css";
import deleteIcon from "../assets/delete.png";

const statusColors = {
  todo: "#6366F1",     // Indigo
  doing: "#F59E0B",    // Amber
  done: "#22C55E",     // Green
};

const TaskCard = ({ title, description, tags, status, handleDelete, index, setIsActiveCard }) => {
  return (
    <article
      className="task_card"
      draggable
      onDragStart={() => setIsActiveCard(index)}
      onDragEnd={() => setIsActiveCard(null)}
    >
      {/* Header with status label */}
            <div className="task_card_header">
            {status ? (
                <span
                className="task_status_label"
                style={{ backgroundColor: statusColors[status] || "#94a3b8" }}
                >
                {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
            ) : (
                <span
                className="task_status_label"
                style={{ backgroundColor: "#94a3b8" }}
                >
                Unknown
                </span>
            )}

            <div className="task_delete" onClick={() => handleDelete(index)}>
                <img src={deleteIcon} className="delete_icon" alt="delete" />
            </div>
            </div>


      {/* Task Content */}
      <div className="task_card_content">
        <h3 className="task_title">{title}</h3>
        {description && <p className="task_description">{description}</p>}
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="task_card_tags">
          {tags.map((tag, i) => (
            <span key={i} className="tag_chip">
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};

export default TaskCard;
