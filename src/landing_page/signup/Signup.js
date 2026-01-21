import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../../api";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await axios.post(
        `${API_BASE_URL}/signup`,
        formData
      );

      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container p-5 mb-5">
      <h1 className="text-center">Sign Up</h1>

      <div className="col-md-6 mx-auto mt-4">
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="form-control mb-3"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="form-control mb-3"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            className="form-control mb-3"
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button className="btn btn-primary w-100">
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;

