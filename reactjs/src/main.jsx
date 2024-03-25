import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn.jsx";
import Welcome from "./pages/Welcome/Welcome.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import "./index.css";
import ForgotPass from "./pages/ForgotPass/ForgotPass.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
