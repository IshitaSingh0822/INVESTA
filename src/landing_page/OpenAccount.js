import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();

  const handleSignupClick = (e) => {
    e.preventDefault(); // Prevent any default behavior
    console.log("Signup button clicked!");
    console.log("Navigating to /signup...");
    
    try {
      navigate("/signup");
      console.log("Navigation called successfully");
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and more
        </p>
        <button
          type="button"
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto", cursor: "pointer" }}
          onClick={handleSignupClick}
        >
          Signup now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;