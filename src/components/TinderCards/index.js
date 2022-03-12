import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "../../utils/setupFirebase";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) => setPeople(snapshot.docs.map((doc) => doc.data())));
    return () => {
      unsubscribe();
    };
  }, []);

  function renderList() {
    return people.map((person) => {
      const distanceInKm = (person.distance / 1000).toFixed(1);
      return (
        <TinderCard className="card" key={person.name} preventSwipe={["up", "down"]}>
          <div className="card__overlay"></div>
          <img className="card__background" src={person.url} width="360" height="640" alt="" />
          <div className="card__info">
            <div className="card__info__top">
              <h3 className="card__title">{person.name}</h3>
              <p className="card__age">{person.age}</p>
            </div>
            <p className="card__description">{person.description}</p>
            <p className="card__distance">
              <span className="sr-only">{`${person.name} está a`}</span>
              {`${distanceInKm} Km de distância`}
            </p>
          </div>
        </TinderCard>
      );
    });
  }

  return <div className="cards">{renderList()}</div>;
}

export default TinderCards;
