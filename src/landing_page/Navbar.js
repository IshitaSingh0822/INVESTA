
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Function to load user data
    const loadUserData = () => {
      const userData = localStorage.getItem("user");
      if (userData) {
        try {
          setUser(JSON.parse(userData));
        } catch (error) {
          console.error("Error parsing user data:", error);
        }
      } else {
        setUser(null);
      }
    };

    // Load user data on mount
    loadUserData();

    // Listen for storage changes (when user logs in/out in another tab or window)
    const handleStorageChange = (e) => {
      if (e.key === "user" || e.key === null) {
        loadUserData();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    
    // Also listen for custom event for same-window updates
    window.addEventListener("userDataUpdated", loadUserData);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("userDataUpdated", loadUserData);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event("userDataUpdated"));
    navigate("/");
  };

  const handleDashboardClick = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token) {
      // Open dashboard in the same window with token and user data
      const userDataParam = userData ? encodeURIComponent(userData) : '';
      window.location.href = `http://localhost:3000?token=${encodeURIComponent(token)}${userData ? '&user=' + userDataParam : ''}`;
    } else {
      alert('Please login first');
      navigate('/login');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top" style={{ zIndex: 1030 }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <Link className="navbar-brand fw-bold fs-4" to="/" style={{ color: "#387ed1", textDecoration: 'none' }}>
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
          style={{ border: 'none', padding: '4px 8px' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{ alignItems: 'center', gap: '8px' }}>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ padding: '8px 16px', fontWeight: 500 }}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product" style={{ padding: '8px 16px', fontWeight: 500 }}>Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing" style={{ padding: '8px 16px', fontWeight: 500 }}>Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support" style={{ padding: '8px 16px', fontWeight: 500 }}>Support</Link>
            </li>
            
            {user ? (
              <>
                <li className="nav-item">
                  <a 
                    className="nav-link" 
                    href="#"
                    onClick={handleDashboardClick}
                    style={{ padding: '8px 16px', fontWeight: 500 }}
                  >
                    Dashboard
                  </a>
                </li>
                <li className="nav-item dropdown" style={{ marginLeft: '8px' }}>
                  <a 
                    className="nav-link dropdown-toggle" 
                    href="#" 
                    id="navbarDropdown" 
                    role="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                    style={{ 
                      padding: '8px 16px', 
                      fontWeight: 500,
                      color: '#333',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <span style={{ 
                      width: '32px', 
                      height: '32px', 
                      borderRadius: '50%', 
                      background: 'linear-gradient(135deg, #387ed1 0%, #2c5aa0 100%)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 600
                    }}>
                      {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </span>
                    {user.name || 'User'}
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown" style={{ marginTop: '8px', border: '1px solid #e0e0e0', borderRadius: '6px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    <li>
                      <Link className="dropdown-item" to="/profile" style={{ padding: '10px 16px', fontSize: '14px' }}>
                        Profile
                      </Link>
                    </li>
                    <li><hr className="dropdown-divider" style={{ margin: '8px 0' }} /></li>
                    <li>
                      <button 
                        className="dropdown-item" 
                        onClick={handleLogout}
                        style={{ padding: '10px 16px', fontSize: '14px', border: 'none', background: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <li className="nav-item" style={{ marginLeft: '8px' }}>
                <Link className="nav-link" to="/login" style={{ padding: '8px 16px', fontWeight: 500 }}>Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;