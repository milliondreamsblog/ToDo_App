# 🗂️ Task Manager – React Project

A simple yet powerful **Task Management Web App** built using **React**.  
It allows users to create, categorize, and organize tasks into “To Do,” “Doing,” and “Done” columns.  
The app also includes a **popup task form**, **drag-and-drop task movement**, and **persistent storage** using localStorage.  

---

## 🚀 Features

✅ **Task Management**
- Add, edit, and delete tasks  
- Organize tasks by status: *To Do*, *Doing*, *Done*

✅ **Popup Task Form**
- Add new tasks via a modal form  
- Input **title**, **description**, **tags**, **status**, and optional **due date/reminder**

✅ **Custom Tags**
- Create and remove tags dynamically

✅ **Drag & Drop**
- Move tasks between columns interactively

✅ **Persistent Storage**
- Saves all tasks locally using `localStorage`

✅ **Responsive Layout**
- Fully responsive design for mobile, tablet, and desktop

---

## 🧠 Approach & Assumptions

### 🔹 Approach
1. **Component-based design**: Each UI section (TaskCard, TaskColumn, TaskForm, etc.) is modular.
2. **State management**: Handled via React’s `useState` and `useEffect`.
3. **Persistence**: Tasks are stored in the browser’s `localStorage`.
4. **Drag & Drop**: Implemented using HTML5 drag events to reorder tasks dynamically.
5. **Optional Enhancements**: Features like Firebase authentication, due date alerts, and live sync via Socket.io can be integrated later.

### 🔹 Assumptions
- Each task includes:
  - `title` *(required)*
  - `description` *(optional)*
  - `tags` *(array of custom labels)*
  - `status` *(todo/doing/done)*
  - `dueDate` and `reminder` *(optional future extensions)*
- User data is stored locally, not server-side.
- App is designed for personal use (single-user mode).

---

## ⚙️ Project Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager


2️⃣ Install dependencies
npm install

3️⃣ Run the app
npm start


App will start on http://localhost:3000

🧩 Project Structure
src/
 ┣ 📁 components/
 ┃ ┣ 📜 NavBar.jsx
 ┃ ┣ 📜 SideBar.jsx
 ┃ ┣ 📜 TaskForm.jsx
 ┃ ┣ 📜 TaskCard.jsx
 ┃ ┣ 📜 TaskColumn.jsx
 ┃ ┗ 📜 DropArea.jsx
 ┣ 📁 assets/
 ┣ 📜 App.jsx
 ┣ 📜 App.css
 ┗ 📜 index.js

🖥️ Deployment (Vercel)

You can deploy directly using Vercel
:

Push your project to GitHub

Go to vercel.com
 → “New Project”

Import your repo → Configure build command (npm run build)

Click Deploy

🧰 Technologies Used

React.js

HTML5 / CSS3

JavaScript (ES6)

LocalStorage API

Vite or Create React App (optional)

🔮 Future Enhancements

🔐 Authentication (Firebase or Clerk)

🕒 Due date & reminder notifications

🧾 Subtasks for hierarchical task tracking

🔗 Real-time collaboration using Socket.io

⚙️ Customizable fields & activity logs

👨‍💻 Author

Akshat Darshi
📧 [akshatsan23@gmail.com
]
🌐 [https://neu-anchor.vercel.app/]




