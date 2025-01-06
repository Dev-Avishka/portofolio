import React, { useState, useEffect } from "react";
import "./UserPolicy.css";

const UserPolicy = () => {
  const [showPolicy, setShowPolicy] = useState(false);

  useEffect(() => {
    const isPolicyAccepted = sessionStorage.getItem("policyAccepted");
    if (!isPolicyAccepted) {
      setShowPolicy(true);
    }else{
      setShowPolicy(true);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem("policyAccepted", "true");
    setShowPolicy(false);
  };

  const handleDecline = () => {
    window.location.href = "https://www.google.com"; // Redirects user to Google
  };

  return (
    showPolicy && (
      <div className="policy-popup">
        <p>
          By using this site, you agree to our{" "}
          <a
            href="https://witty-fog-c02.notion.site/Dev-Avishka-User-Data-Policy-172481ef2db280d3b174e68c4eb51c49"
            target="_blank"
            rel="noopener noreferrer"
          >
            User Data Policy
          </a>.
        </p>
        <div className="policy-actions">
          <button className="accept-btn" onClick={handleAccept}>
            Accept
          </button>
          <button className="decline-btn" onClick={handleDecline}>
            Decline
          </button>
        </div>
      </div>
    )
  );
};

export default UserPolicy;
