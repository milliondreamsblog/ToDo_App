import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BarChart2,
  Calendar,
  ClipboardList,
  FolderKanban,
  LayoutDashboard,
  LogOut,
  Settings,
  UserRound,
  Users,
  UserCog,
  PanelRightOpen,
  PanelRightClose,
} from "lucide-react";
import { TbAB2 } from "react-icons/tb";
import "./SideBar.css";

const SideBar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  const handleSettingOpen = () => setIsSettingOpen((prev) => !prev);
  const handleExpendCollapseSidebar = () =>
    setIsSidebarVisible((prev) => !prev);

  return (
    <div
      className={`${
        isSidebarVisible ? "sidebar-container" : "collapse-sidebar"
      }`}
    >
      {/* Collapse / Expand Button */}
      <div
        className="sidebar-collapse-btn"
        onClick={handleExpendCollapseSidebar}
      >
        {isSidebarVisible ? (
          <PanelRightOpen size={20} />
        ) : (
          <PanelRightClose size={20} />
        )}
      </div>

      {/* Sidebar Menu */}
      <nav className={isSidebarVisible ? "nav-menu" : "collapse-nav-menu"}>
        <ul>
          <NavLink to="/" className="nav-item">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/project" className="nav-item">
            <FolderKanban size={20} />
            <span>Projects</span>
          </NavLink>

          <NavLink to="/task" className="nav-item">
            <FolderKanban size={20} />
            <span>Tasks</span>
          </NavLink>

          <NavLink to="/admin" className="nav-item">
            <UserCog size={20} />
            <span>Admin</span>
          </NavLink>

          <NavLink to="/managers" className="nav-item">
            <UserRound size={20} />
            <span>Managers</span>
          </NavLink>

          <NavLink to="/operation-pics" className="nav-item">
            <Users size={20} />
            <span>Operation PICs</span>
          </NavLink>

          <NavLink to="/calendar" className="nav-item">
            <Calendar size={20} />
            <span>Calendar</span>
          </NavLink>

          <NavLink to="/dependencies" className="nav-item">
            <TbAB2 size={20} />
            <span>Dependencies</span>
          </NavLink>

          <NavLink to="/reports" className="nav-item">
            <BarChart2 size={20} />
            <span>Reports</span>
          </NavLink>

          <NavLink to="/audit-logs" className="nav-item">
            <ClipboardList size={20} />
            <span>Audit Logs</span>
          </NavLink>
        </ul>

        <ul>
          <li className="nav-item" onClick={handleSettingOpen}>
            <Settings size={20} />
            <span>Settings</span>
          </li>

          <NavLink to="/login" className="nav-item">
            <LogOut size={20} />
            <span>Logout</span>
          </NavLink>
        </ul>
      </nav>

      {/* Simple Modal Popup for Settings */}
      {isSettingOpen && (
        <div className="settings-popup">
          <div className="settings-box">
            <h3>Settings</h3>
            <p>Example placeholder for future settings UI.</p>
            <button
              className="close-btn"
              onClick={() => setIsSettingOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
