import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo_1.png";
import { logOut } from "../api/api";
import { toast } from "react-toastify";

const Layout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); 

  const handleLogout = async () => {
    try {      
      const response = await logOut(); 
      toast.success(response.data.message); 
      localStorage.removeItem("token"); 
      navigate("/login"); 
    } catch (error) {
      toast.error("Failed to log out!"); 
    }
  };

  return (
    <header>
      <div className="banner">
        <a href="/">
          <img
            src={logo}
            alt="Group 3"
            className="logo00"
            style={{ width: 90, height: "auto", marginRight: 20 }}
          />
        </a>
        <div className="banner-text roboto-thin">
          <h1 className="header-text-1">Group 3</h1>
          <p className="occupation">The Third Wave</p>
        </div>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          {token && (
            <li>
              <button
                onClick={handleLogout}
                style={{
                  color: "white",
                  background: "none",
                  border: "none",
                  padding: "10px 20px",
                  fontFamily: "var(--nav-bar-font-family)",
                  fontWeight: "100",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                  display: "block",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#555")}
                onMouseLeave={(e) => (e.target.style.background = "none")}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Layout;



