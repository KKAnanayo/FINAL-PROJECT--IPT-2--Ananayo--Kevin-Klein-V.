import React from "react";
import { Link } from "react-router-dom";
import Home from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InfoIcon from "@mui/icons-material/Info";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import logo from "./9202_1715092898773363_598104470283525789_n-transformed.png";
import TagIcon from "@mui/icons-material/Tag";
import "./TopBar.css";

function TopBar() {
  return (
    <div className="topbar">
      <div className="left">
        {/* Your restaurant logo */}
        <Link to="/menu">
          <img className="logo" src={logo} alt="Restaurant Logo" />
        </Link>
      </div>
      <div className="right">
        {/* Navigation links */}
        <div className="dropdown">
          <Link to="#" className="link">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <MenuIcon sx={{ fontSize: 30 }} />
              <span style={{ marginTop: 5 }}>Menu</span>
            </div>
          </Link>
          <div className="dropdown-content">
            <Link to="/" className="dropdown-link">
              <div style={{ display: "flex", alignItems: "center" }}>
                <Home sx={{ fontSize: 20, marginRight: 1 }} />
                <span>Home</span>
              </div>
            </Link>
            <Link to="/menu" className="dropdown-link">
              <div style={{ display: "flex", alignItems: "center" }}>
                <MenuBookIcon sx={{ fontSize: 20, marginRight: 1 }} />
                <span>Menu</span>
              </div>
            </Link>
            <Link to="/location" className="dropdown-link">
              <div style={{ display: "flex", alignItems: "center" }}>
                <LocationOnIcon sx={{ fontSize: 20, marginRight: 1 }} />
                <span>Location</span>
              </div>
            </Link>
            <Link to="/about" className="dropdown-link">
              <div style={{ display: "flex", alignItems: "center" }}>
                <InfoIcon sx={{ fontSize: 20, marginRight: 1 }} />
                <span>About</span>
              </div>
            </Link>
            <Link to="/socialmedia" className="dropdown-link">
              <div style={{ display: "flex", alignItems: "center" }}>
                <TagIcon sx={{ fontSize: 20, marginRight: 1 }} />
                <span>Social Media</span>
              </div>
            </Link>
            <Link to="/dashboard" className="dropdown-link">
              <div style={{ display: "flex", alignItems: "center" }}>
                <SupervisorAccountIcon sx={{ fontSize: 20, marginRight: 1 }} />
                <span>Admin</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
