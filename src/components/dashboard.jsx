import React, { useState } from "react";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Brainstorming",
      description: "Brainstorming brings team members' diverse experience into play.",
      priority: "Low",
      status: "todo",
      comments: 12,
      files: 0,
      assignees: ["https://i.pravatar.cc/150?img=1", "https://i.pravatar.cc/150?img=2", "https://i.pravatar.cc/150?img=3"]
    },
    {
      id: 2,
      title: "Research",
      description: "User research helps you to create an optimal product for users.",
      priority: "High",
      status: "todo",
      comments: 10,
      files: 3,
      assignees: ["https://i.pravatar.cc/150?img=4", "https://i.pravatar.cc/150?img=5"]
    },
    {
      id: 3,
      title: "Wireframes",
      description: "Low fidelity wireframes include the most basic content and visuals.",
      priority: "High",
      status: "todo",
      comments: 12,
      files: 0,
      assignees: ["https://i.pravatar.cc/150?img=6", "https://i.pravatar.cc/150?img=7", "https://i.pravatar.cc/150?img=8"]
    },
    {
      id: 4,
      title: "Brainstorming",
      description: "Brainstorming brings team members' diverse experience into play.",
      priority: "Low",
      status: "progress",
      comments: 12,
      files: 0,
      assignees: ["https://i.pravatar.cc/150?img=1", "https://i.pravatar.cc/150?img=2", "https://i.pravatar.cc/150?img=3"]
    },
    {
      id: 5,
      title: "Brainstorming",
      description: "Brainstorming brings team members' diverse experience into play.",
      priority: "Low",
      status: "progress",
      comments: 12,
      files: 0,
      assignees: ["https://i.pravatar.cc/150?img=1", "https://i.pravatar.cc/150?img=2", "https://i.pravatar.cc/150?img=3"]
    },
    {
      id: 6,
      title: "Brainstorming",
      description: "Brainstorming brings team members' diverse experience into play.",
      priority: "Low",
      status: "progress",
      comments: 12,
      files: 0,
      assignees: ["https://i.pravatar.cc/150?img=1", "https://i.pravatar.cc/150?img=2", "https://i.pravatar.cc/150?img=3"]
    },
    {
      id: 7,
      title: "Brainstorming",
      description: "Brainstorming brings team members' diverse experience into play.",
      priority: "Low",
      status: "done",
      comments: 12,
      files: 0,
      assignees: ["https://i.pravatar.cc/150?img=1", "https://i.pravatar.cc/150?img=2", "https://i.pravatar.cc/150?img=3"]
    },
    {
      id: 8,
      title: "Design System",
      description: "It just needs to adapt the UI from what you did before",
      priority: "Completed",
      status: "done",
      comments: 12,
      files: 0,
      assignees: ["https://i.pravatar.cc/150?img=1", "https://i.pravatar.cc/150?img=2", "https://i.pravatar.cc/150?img=3"]
    }
  ]);

  const [activeCard, setActiveCard] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTaskStatus, setNewTaskStatus] = useState("");
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "Low"
  });

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleDragStart = (e, task) => {
    setActiveCard(task);
  };

  const handleDragEnd = () => {
    setActiveCard(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newStatus) => {
    e.preventDefault();
    if (activeCard) {
      setTasks(tasks.map(task => 
        task.id === activeCard.id 
          ? { ...task, status: newStatus }
          : task
      ));
      setActiveCard(null);
    }
  };

  const handleAddTask = () => {
    if (newTask.title.trim()) {
      const task = {
        id: Date.now(),
        title: newTask.title,
        description: newTask.description,
        priority: newTask.priority,
        status: newTaskStatus,
        comments: 0,
        files: 0,
        assignees: ["https://i.pravatar.cc/150?img=1"]
      };
      setTasks([...tasks, task]);
      setNewTask({ title: "", description: "", priority: "Low" });
      setShowAddModal(false);
    }
  };

  const openAddModal = (status) => {
    setNewTaskStatus(status);
    setShowAddModal(true);
  };

  const priorityColors = {
    "Low": "#FEF3C7",
    "High": "#FEE2E2",
    "Completed": "#D1FAE5"
  };

  const priorityTextColors = {
    "Low": "#92400E",
    "High": "#991B1B",
    "Completed": "#065F46"
  };

  const TaskCard = ({ task }) => {
    return (
      <div
        style={styles.taskCard}
        draggable
        onDragStart={(e) => handleDragStart(e, task)}
        onDragEnd={handleDragEnd}
      >
        <div style={styles.cardHeader}>
          <span 
            style={{
              ...styles.priorityBadge,
              backgroundColor: priorityColors[task.priority],
              color: priorityTextColors[task.priority]
            }}
          >
            {task.priority}
          </span>
          <button 
            style={styles.deleteButton}
            onClick={() => handleDelete(task.id)}
          >
            ×
          </button>
        </div>

        <h3 style={styles.cardTitle}>{task.title}</h3>
        <p style={styles.cardDescription}>{task.description}</p>

        <div style={styles.cardFooter}>
          <div style={styles.assignees}>
            {task.assignees.map((avatar, i) => (
              <img 
                key={i} 
                src={avatar} 
                alt="" 
                style={{...styles.avatar, marginLeft: i > 0 ? '-8px' : '0'}}
              />
            ))}
          </div>
          <div style={styles.cardStats}>
            <span style={styles.stat}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              {task.comments}
            </span>
            <span style={styles.stat}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                <polyline points="13 2 13 9 20 9" />
              </svg>
              {task.files}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const TaskColumn = ({ title, status, color, tasks }) => {
    const columnTasks = tasks.filter(task => task.status === status);
    
    return (
      <div 
        style={styles.column}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, status)}
      >
        <div style={styles.columnHeader}>
          <div style={styles.columnTitle}>
            <span style={{...styles.dot, backgroundColor: color}}></span>
            <span style={styles.columnName}>{title}</span>
            <span style={styles.count}>{columnTasks.length}</span>
          </div>
          <button 
            style={styles.addButton}
            onClick={() => openAddModal(status)}
          >
            +
          </button>
        </div>
        <div style={{...styles.columnDivider, backgroundColor: color}}></div>
        
        <div style={styles.cardsContainer}>
          {columnTasks.length === 0 ? (
            <div style={styles.emptyState}>Drop tasks here or click + to add</div>
          ) : (
            columnTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))
          )}
        </div>
      </div>
    );
  };

  const teamMembers = [
    "https://i.pravatar.cc/150?img=10",
    "https://i.pravatar.cc/150?img=11",
    "https://i.pravatar.cc/150?img=12",
    "https://i.pravatar.cc/150?img=13"
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <h1 style={styles.title}>Mobile App</h1>
          <button style={styles.iconBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
          <button style={styles.iconBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </button>
        </div>

        <div style={styles.headerRight}>
          <button style={styles.inviteBtn}>
            <span style={styles.plusIcon}>+</span> Invite
          </button>
          <div style={styles.avatarGroup}>
            {teamMembers.map((avatar, i) => (
              <img 
                key={i} 
                src={avatar} 
                alt="" 
                style={{...styles.headerAvatar, marginLeft: i > 0 ? '-8px' : '0'}}
              />
            ))}
            <div style={styles.moreCount}>+2</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div style={styles.filtersRow}>
        <div style={styles.filtersLeft}>
          <button style={styles.filterBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            Filter
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <button style={styles.filterBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Today
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        <div style={styles.filtersRight}>
          <button style={styles.shareBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
            Share
          </button>
          <div style={styles.separator}></div>
          <button style={styles.primaryBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
          <button style={styles.iconOnlyBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </button>
        </div>
      </div>

      {/* Columns */}
      <div style={styles.board}>
        <TaskColumn 
          title="To Do" 
          status="todo" 
          color="#5051F9"
          tasks={tasks}
        />
        <TaskColumn 
          title="On Progress" 
          status="progress" 
          color="#FFA500"
          tasks={tasks}
        />
        <TaskColumn 
          title="Done" 
          status="done" 
          color="#76A5EA"
          tasks={tasks}
        />
      </div>

      {/* Add Task Modal */}
      {showAddModal && (
        <div style={styles.modalOverlay} onClick={() => setShowAddModal(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2 style={styles.modalTitle}>Add New Task</h2>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Title *</label>
              <input
                type="text"
                style={styles.input}
                value={newTask.title}
                onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                placeholder="Enter task title"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Description</label>
              <textarea
                style={{...styles.input, ...styles.textarea}}
                value={newTask.description}
                onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                placeholder="Enter task description"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Priority</label>
              <select
                style={styles.select}
                value={newTask.priority}
                onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
              >
                <option value="Low">Low</option>
                <option value="High">High</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div style={styles.modalActions}>
              <button 
                style={styles.cancelBtn}
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
              <button 
                style={styles.submitBtn}
                onClick={handleAddTask}
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "24px",
    backgroundColor: "#F9FAFB",
    minHeight: "100vh",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#111827",
    margin: 0,
  },
  iconBtn: {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#EEF2FF",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  inviteBtn: {
    padding: "8px 16px",
    backgroundColor: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "14px",
    fontWeight: "500",
  },
  plusIcon: {
    color: "#6366F1",
    fontSize: "16px",
  },
  avatarGroup: {
    display: "flex",
    alignItems: "center",
  },
  headerAvatar: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    border: "2px solid white",
  },
  moreCount: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    backgroundColor: "#FECDD3",
    border: "2px solid white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: "600",
    color: "#BE123C",
    marginLeft: "-8px",
  },
  filtersRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
  },
  filtersLeft: {
    display: "flex",
    gap: "12px",
  },
  filterBtn: {
    padding: "8px 16px",
    backgroundColor: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#374151",
  },
  filtersRight: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  shareBtn: {
    padding: "8px 16px",
    backgroundColor: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    fontWeight: "500",
  },
  separator: {
    width: "1px",
    height: "24px",
    backgroundColor: "#E5E7EB",
  },
  primaryBtn: {
    width: "40px",
    height: "40px",
    backgroundColor: "#6366F1",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconOnlyBtn: {
    width: "40px",
    height: "40px",
    backgroundColor: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  board: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },
  column: {
    backgroundColor: "#F3F4F6",
    borderRadius: "16px",
    padding: "16px",
    minHeight: "400px",
  },
  columnHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },
  columnTitle: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
  },
  columnName: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#111827",
  },
  count: {
    backgroundColor: "#E5E7EB",
    color: "#6B7280",
    padding: "2px 8px",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: "500",
  },
  addButton: {
    width: "28px",
    height: "28px",
    backgroundColor: "#6366F1",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "1",
  },
  columnDivider: {
    height: "3px",
    borderRadius: "2px",
    marginBottom: "16px",
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  emptyState: {
    padding: "40px 20px",
    textAlign: "center",
    color: "#9CA3AF",
    fontSize: "14px",
    border: "2px dashed #D1D5DB",
    borderRadius: "8px",
    backgroundColor: "#F9FAFB",
  },
  taskCard: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "16px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    cursor: "move",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  priorityBadge: {
    padding: "4px 12px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "500",
  },
  deleteButton: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "24px",
    color: "#EF4444",
    padding: "0",
    width: "24px",
    height: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    transition: "background-color 0.2s",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#111827",
    margin: "0 0 8px 0",
  },
  cardDescription: {
    fontSize: "14px",
    color: "#6B7280",
    lineHeight: "1.5",
    margin: "0 0 16px 0",
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  assignees: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    border: "2px solid white",
  },
  cardStats: {
    display: "flex",
    gap: "12px",
  },
  stat: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "12px",
    color: "#6B7280",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
    width: "90%",
    maxWidth: "500px",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  },
  modalTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#111827",
    margin: "0 0 20px 0",
  },
  formGroup: {
    marginBottom: "16px",
  },
  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: "500",
    color: "#374151",
    marginBottom: "6px",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #D1D5DB",
    borderRadius: "8px",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
  },
  textarea: {
    minHeight: "100px",
    resize: "vertical",
    fontFamily: "inherit",
  },
  select: {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #D1D5DB",
    borderRadius: "8px",
    fontSize: "14px",
    outline: "none",
    backgroundColor: "white",
    cursor: "pointer",
  },
  modalActions: {
    display: "flex",
    gap: "12px",
    justifyContent: "flex-end",
    marginTop: "24px",
  },
  cancelBtn: {
    padding: "10px 20px",
    backgroundColor: "white",
    border: "1px solid #D1D5DB",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    color: "#374151",
  },
  submitBtn: {
    padding: "10px 20px",
    backgroundColor: "#6366F1",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    color: "white",
  },
};

export default KanbanBoard;