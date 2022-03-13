import { Modal, Box } from "@material-ui/core";
import React from "react";
import modalImage from "../../assets/images/modal-image.jpg";
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
          Fechar esta porcaria
        </button>
        <img
          src={modalImage}
          width="150"
          height="150"
          loading="lazy"
          alt="Fotografia do Bruno Aleixo com a legenda ih, ca burro"
        />
        <h2 id="modal-modal-title" className="modal__title">
          Calhou cócó!
        </h2>
        <p id="modal-modal-description" className="modal__message">
          Estes botões não fazem nada!
        </p>
      </Box>
    </Modal>
  );
}

export default SpecialModal;
