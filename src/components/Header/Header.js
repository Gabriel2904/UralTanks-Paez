import React from "react";
import "./Header.css";
import Button from "@mui/material/Button";

const Header = ({ title, onClick }) => {
  return (
    <div className="Header">
      <h1>{title}</h1>
      <Button onClick={onClick} variant="outlined">
        Hace Click!
      </Button>
    </div>
  );
};

export default Header;
