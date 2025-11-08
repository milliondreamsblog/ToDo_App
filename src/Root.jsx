import React from "react";
import { Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import App from "./App";
import Auth from "./components/Auth.jsx";

const Root = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <SignedIn>
              <App />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route path="/sign-in" element={<Auth />} />
      <Route path="/sign-up" element={<Auth />} />
    </Routes>
  );
};

export default Root;
