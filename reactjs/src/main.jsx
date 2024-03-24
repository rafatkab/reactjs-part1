import React from "react";
import ReactDOM from "react-dom/client";
import App from "./SignIn.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn.jsx";
import Welcome from "./Welcome.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
