import { Modal, Box, Link } from "@mui/material";
import React from "react";
import "./SpecialModal.css";

const SOME_PROP_SPECIFIC_STYLES = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 320,
  bgcolor: "#F2C706",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function SpecialModal({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal__content" sx={SOME_PROP_SPECIFIC_STYLES}>
        <button className="sr-only" onClick={onClose}>
          Close this window
        </button>
        <img
          className="modal__image"
          src="https://c.tenor.com/A-ozELwp694AAAAM/thumbs-thumbs-up-kid.gif"
          width="150"
          height="112"
          loading="lazy"
          alt="Thumbs up kid"
        />
        <h2 id="modal-modal-title" className="modal__title">
          Join the good fight!
        </h2>
        <p id="modal-modal-description" className="modal__message">
          Checkout our open positions and know more about what we do and why we do it.
        </p>
        <Link
          className="modal__link"
          href="http://careers.feedzai.com/"
          hrefLang="en-us"
          target="_blank"
          rel="noopenener noreferrer"
        >
          Sure, let's do it!
        </Link>
      </Box>
    </Modal>
  );
}

export default SpecialModal;
