import React from "react";
import "./Layout.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
export default function Layout({ children, handleLogout }) {
  return (
    <>
      <div className="Container">
        <Sidebar handleLogout={handleLogout} />
        <div className="bodyContainer">{children}</div>
      </div>
    </>
  );
}
