import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ setTasks }) => {
  const [showForm, setShowForm] = useState(false);
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    status: "todo",
    tags: [],
  });
  const [tagInput, setTagInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTag = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!taskData.tags.includes(tagInput.trim())) {
        setTaskData((prev) => ({
          ...prev,
          tags: [...prev.tags, tagInput.trim()],
        }));
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTaskData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskData.title.trim()) return;

    setTasks((prev) => [...prev, taskData]);
    setTaskData({ title: "", description: "", status: "todo", tags: [] });
    setShowForm(false);
  };

  return (
    <div className="task-form-container">
      {/* Plus button to open modal */}
      <button className="add-task-btn" onClick={() => setShowForm(true)}>
        +
      </button>

      {/* Modal popup */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Add New Task</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Task Title"
                value={taskData.title}
                onChange={handleChange}
                required
              />

              <textarea
                name="description"
                placeholder="Task Description"
                value={taskData.description}
                onChange={handleChange}
              ></textarea>

              {/* Category Dropdown */}
              <label>Status</label>
              <select
                name="status"
                value={taskData.status}
                onChange={handleChange}
              >
                <option value="todo">To Do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>

              {/* Tags Input */}
              <label>Tags</label>
              <div className="tag-input-container">
                {taskData.tags.map((tag) => (
                  <span className="tag-item" key={tag}>
                    {tag}
                    <button
                      type="button"
                      className="remove-tag"
                      onClick={() => removeTag(tag)}
                    >
                      ×
                    </button>
                  </span>
                ))}
                <input
                  type="text"
                  placeholder="Type and press Enter"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleAddTag}
                />
              </div>

              {/* Buttons */}
              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskForm;
