import React from "react";
import { NavLink } from "react-router-dom";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SearchRounded from "@mui/icons-material/SearchRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ForumIcon from "@mui/icons-material/Forum";
import { IconButton } from "@mui/material";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__navigation" aria-label="pages">
        <IconButton component={NavLink} to="/" className="footer__button">
          <WhatshotIcon fontSize="large" />
        </IconButton>
        <IconButton className="footer__button" disabled>
          <SearchRounded fontSize="large" />
        </IconButton>
        <IconButton className="footer__button" disabled>
          <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton component={NavLink} to="/chat" className="footer__button">
          <ForumIcon fontSize="large" />
        </IconButton>
      </nav>
    </footer>
  );
}

export default Footer;
