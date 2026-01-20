import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUserData = () => {
      const userData = localStorage.getItem("user");
      if (userData) {
        try {
          setUser(JSON.parse(userData));
        } catch (err) {
          console.error("Error parsing user data", err);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    loadUserData();
    window.addEventListener("userDataUpdated", loadUserData);

    return () => {
      window.removeEventListener("userDataUpdated", loadUserData);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("userDataUpdated"));
    navigate("/");
  };

  const handleDashboardClick = () => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token) {
      const userParam = userData ? encodeURIComponent(userData) : "";
      window.location.href = `http://localhost:3000?token=${encodeURIComponent(
        token
      )}&user=${userParam}`;
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
      <div className="container" style={{ maxWidth: "1200px" }}>
        <Link
          className="navbar-brand fw-bold fs-4"
          to="/"
          style={{ color: "#387ed1" }}
        >
          INVESTA
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/product">Product</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>

            {user ? (
              <>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={handleDashboardClick}
                    style={{ textDecoration: "none" }}
                  >
                    Dashboard
                  </button>
                </li>

                <li className="nav-item dropdown">
                  <button
                    className="nav-link dropdown-toggle btn btn-link"
                    id="navbarDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ textDecoration: "none" }}
                  >
                    {user.name || "User"}
                  </button>

                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
