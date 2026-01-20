import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      // If not logged in, redirect to login
      navigate("/login");
    }
  }, [navigate]);

  if (!user) {
    return <div className="container p-5 text-center">Loading...</div>;
  }

  return (
    <div className="container p-5 mb-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h1 className="mb-4">My Profile</h1>
          
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Account Information</h5>
              
              <div className="row mb-3">
                <div className="col-md-4">
                  <strong>Name:</strong>
                </div>
                <div className="col-md-8">
                  {user.name}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-4">
                  <strong>Email:</strong>
                </div>
                <div className="col-md-8">
                  {user.email}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-4">
                  <strong>Username:</strong>
                </div>
                <div className="col-md-8">
                  {user.username || 'N/A'}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-4">
                  <strong>Account Status:</strong>
                </div>
                <div className="col-md-8">
                  <span className="badge bg-success">Active</span>
                </div>
              </div>

              <hr className="my-4" />

              <div className="d-flex gap-2">
                <button className="btn btn-primary" onClick={() => alert('Edit profile feature coming soon!')}>
                  Edit Profile
                </button>
                <button className="btn btn-outline-secondary" onClick={() => navigate('/')}>
                  Back to Home
                </button>
              </div>
            </div>
          </div>

          {/* Additional Account Details */}
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title mb-3">Quick Actions</h5>
              <div className="list-group list-group-flush">
                <a 
                  href="#" 
                  className="list-group-item list-group-item-action"
                  onClick={(e) => {
                    e.preventDefault();
                    const token = localStorage.getItem('token');
                    if (token) {
                      window.location.href = `http://localhost:3000?token=${encodeURIComponent(token)}`;
                    } else {
                      alert('Please login first');
                    }
                  }}
                >
                  View Dashboard →
                </a>
                <a href="#" className="list-group-item list-group-item-action" onClick={(e) => { e.preventDefault(); alert('Change password feature coming soon!'); }}>
                  Change Password →
                </a>
                <a href="#" className="list-group-item list-group-item-action" onClick={(e) => { e.preventDefault(); alert('Security settings coming soon!'); }}>
                  Security Settings →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;