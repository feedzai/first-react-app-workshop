import React from "react";
import TinderCard from "react-tinder-card";

const Card = (props) => {
  const { person } = props;

  return (
    <TinderCard className="card" preventSwipe={["up", "down"]}>
      <div className="card__overlay"></div>
      <img
        className="card__background"
        src={person.url}
        width="360"
        height="640"
        alt=""
        loading="lazy"
        style={{
          "--image-position": person.position,
        }}
      />
      <div className="card__info">
        <div className="card__info__top">
          <h3 className="card__title">{person.name}</h3>
        </div>
        <p className="card__description">{person.description}</p>
      </div>
    </TinderCard>
  );
};

export default Card;
