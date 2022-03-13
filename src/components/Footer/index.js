import React from "react";
import { NavLink } from "react-router-dom";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SearchRounded from "@material-ui/icons/SearchRounded";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ForumIcon from "@material-ui/icons/Forum";
import { IconButton } from "@material-ui/core";
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
