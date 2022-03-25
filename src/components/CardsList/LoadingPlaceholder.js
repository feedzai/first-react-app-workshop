import React from "react";

function LoadingPlaceholder() {
  return (
    <div className="placeholder">
      <img
        className="placeholder__avatar"
        src="https://feedzai-react-workshop-2022.web.app/profiles/img-bruno-aleixo.jpg"
        height="64"
        width="64"
        alt="Foto do Bruno Aleixo"
      />
      <div className="placeholder__ring__inner" />
      <div className="placeholder__ring__outer" />
    </div>
  );
}

export default LoadingPlaceholder;
