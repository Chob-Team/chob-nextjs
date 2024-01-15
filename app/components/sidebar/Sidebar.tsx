import React, { useState } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
  
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <div className={`sidebar ${isSidebarOpen ? "" : "closed"} h-full p-6 bg-white dark:bg-gray-800`}>
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>
        {/* Add your menu items here */}
        <ul >
          <li >
            <FontAwesomeIcon icon={faHome} />
            {isSidebarOpen && <span className="sidebar-text"> Homes</span>}
          </li>
          <li>
            <FontAwesomeIcon icon={faHome} />
            {isSidebarOpen && <span className="sidebar-text"> Homes</span>}
          </li>
          <li>
            <FontAwesomeIcon icon={faHome} />
            {isSidebarOpen && <span className="sidebar-text"> Homes</span>}
          </li>
        </ul>
      </div>
    );
  };
  
export default Sidebar;
