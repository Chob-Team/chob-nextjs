import React, { useState , useEffect  } from "react";
import { FaUser, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const nextDarkMode = !darkMode;
    setDarkMode(nextDarkMode);

    if (nextDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark");
      setDarkMode(true);
    }
  }, []);
  
  return (
    <header>
      <nav
        className={`w-full h-14 bg-white ${
          darkMode ? "dark:bg-gray-800" : ""
        } shadow-lg z-40`}
      >
        <div className="flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
          <p className="text-2xl font-medium">Logo</p>
          <div className="flex items-center gap-7 ">
            <p className="hidden md:block">
              {" "}
              Username
            </p>

            
            <div className="">
              <ul className="flex items-center gap-4">
                <li>
                  <div className="relative">
                    <FaUser onClick={toggleMenu} />
                    {showMenu && (
                      <div className="absolute right-0">
                        <p>Settings</p>
                        <p>Profile</p>
                        <p>Logout</p>
                      </div>
                    )}
                  </div>
                </li>
                <li>
                  {darkMode ? (
                    <FaSun onClick={toggleDarkMode} />
                  ) : (
                    <FaMoon onClick={toggleDarkMode} />
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
