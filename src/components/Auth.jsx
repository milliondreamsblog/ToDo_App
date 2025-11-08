import React from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";
import { useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  const isSignIn = location.pathname === "/sign-in";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f8fafc",
      }}
    >
      <div style={{ width: "360px" }}>
        {isSignIn ? (
          <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />
        ) : (
          <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />
        )}
      </div>
    </div>
  );
};

export default Auth;
git