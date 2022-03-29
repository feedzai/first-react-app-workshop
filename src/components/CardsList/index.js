import React, { useEffect, useState } from "react";
import SpecialModal from "../SpecialModal";
import SwipeButtons from "../SwipeButtons";
import Card from "./Card";
import LoadingPlaceholder from "./LoadingPlaceholder";
import "./CardsList.css";
import { getPeople } from "../../services";

/**
 * @typedef {'left' | 'right' | 'up' | 'down'} Direction
 */

/**
 * Implements a list of cards.
 * Subscribes to a firebase store on mount.
 *
 * @returns {JSX.Element}
 */
function CardsList() {
  // This is the internal state for the list of users.
  // It starts with an empty array
  const [users, setUsers] = useState([]);

  // STEP 4: Get the modal working
  const [showModal, setShowModal] = useState(false);

  const hasUsers = Array.isArray(users) && users.length > 0;

  /**
   * STEP 3: Get the latest people and show the cards
   *
   * When the component mounts:
   * 1. query the firebase db
   * 2. get the latest snapshot of the collection of "people"
   * 3. and then update the component state (if there are, in fact, cards to show)
   */
  useEffect(() => {
    const unsubscribe = getPeople((allUsers) => setUsers(allUsers));

    // When the component unmounts, remove the cards subscription and the fake timeout
    return () => {
      clearTimeout();
      unsubscribe();
    };
  }, []);

  /**
   * Handles the click on any of the bottom buttons
   */
  function handleOnClickOnButtons() {
    setShowModal(true);
  }

  /**
   * Handles the click to close modal
   */
  function handleOnCloseModal() {
    setShowModal(false);
  }

  /**
   * Render an array of `Card` components
   *
   * @returns {JSX.Element[]}
   */
  function renderList() {
    // Go through each user and return a `Card` component with the necessary props
    // 1. Convert the distance in meters to kilometers;
    // 2. Don't forget the key
    const listOfUsers = users.map((person) => {
      const convertedDistance = (person.distance / 1000).toFixed(1);

      return <Card key={person.name} distance={convertedDistance} person={person} />;
    });

    return listOfUsers;
  }

  return (
    <>
      {hasUsers ? <div className="cards">{renderList()}</div> : <LoadingPlaceholder />}
      <SwipeButtons onClick={handleOnClickOnButtons} />
      <SpecialModal open={showModal} onClose={handleOnCloseModal} />
    </>
  );
}

export default CardsList;
