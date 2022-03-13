import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";
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
