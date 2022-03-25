import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackRounded from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import ProfileAvatar from "../ProfileAvatar";
import Logo from "./Logo";

function Header({ backButton }) {
  const navigate = useNavigate();

  function renderBackButton() {
    return backButton ? (
      <IconButton onClick={() => navigate(backButton, { replace: true })}>
        <ArrowBackRounded fontSize="large" className="header__icon" />
      </IconButton>
    ) : (
      <ProfileAvatar />
    );
  }

  return (
    <header className="header">
      <div className="header__option">{renderBackButton()}</div>
      <Logo />
    </header>
  );
}

export default Header;
