import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Landing from "./Pages/Landing";
import Albums from "./Pages/Albums";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Albums/>} />
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.Fragment>
);
