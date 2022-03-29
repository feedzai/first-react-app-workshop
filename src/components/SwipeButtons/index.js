import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from "@mui/material/IconButton";
import "./SwipeButtons.css";

function SwipeButtons({ onClick }) {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat" onClick={onClick}>
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left" onClick={onClick}>
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star" onClick={onClick}>
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right" onClick={onClick}>
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning" onClick={onClick}>
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
