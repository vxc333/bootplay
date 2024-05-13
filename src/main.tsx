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
import MyWallet from "./Pages/MyWallet";
import { AlbumProvider } from "./context/AlbumContext";
import { WalletProvider } from "./context/WalletContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
    <BrowserRouter>
      <AuthProvider>
        <AlbumProvider>
          <WalletProvider>
            <Routes>
              <Route path="*" element={<Landing />} />
              <Route path="/" index element={<Landing />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="" element={<PrivateRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/mywallet" element={<MyWallet />} />
                <Route path="/myalbuns" element={<MyRecords />} />
              </Route>
            </Routes>
          </WalletProvider>
        </AlbumProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.Fragment>
);
