import React from "react";
import TinderCard from "react-tinder-card";

const Card = (props) => {
  const { distance, person } = props;

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
      />
      <div className="card__info">
        <div className="card__info__top">
          <h3 className="card__title">{person.name}</h3>
          <p className="card__age">{person.age}</p>
        </div>
        <p className="card__description">{person.description}</p>
        <p className="card__distance">
          <span className="sr-only">{`${person.name} está a`}</span>
          {`${distance} Km de distância`}
        </p>
      </div>
    </TinderCard>
  );
};

export default Card;
