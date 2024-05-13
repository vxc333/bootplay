import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import MyRecords from "./Pages/MyRecords";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoutes from "./utils/PrivateRoutes";
import CarouselAlbum from "./components/CarouselAlbum";
import MyWallet from "./Pages/MyWallet";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/test" element={<CarouselAlbum />} />

          <Route path="*" element={<Landing />} />
          <Route path="/" index element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="" element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/myrecords" element={<MyRecords />} />
            <Route path="/mywallet" element={<MyWallet />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.Fragment>
);
