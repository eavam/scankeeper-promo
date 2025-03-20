import React, { useEffect } from "react";
import { navigate } from "gatsby";

const PrivacyRedirect = () => {
  useEffect(() => {
    navigate("/privacy-policy", { replace: true });
  }, []);

  return (
    <div>
      <p>Redirecting to Privacy Policy...</p>
    </div>
  );
};

export default PrivacyRedirect;
