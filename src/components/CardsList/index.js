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

  /**
   * STEP 4: Get the modal working
   *
   * Steps to resolve:
   * 1. Import the useState hook
   * 2. Declare a default value of false
   * 3. The returned value is an array.
   *    You can call them `[showModal, setShowModal]`, for example
   * 4. Scroll down a bit. Uncomment the
   */
  // DO IT HERE

  const hasUsers = Array.isArray(users) && users.length > 0;

  /**
   * STEP 3: Get the latest people and show the cards
   *
   * When the component mounts:
   * 1. query the firebase db
   * 2. get the latest snapshot of the collection of "people"
   * 3. and then update the component state (if there are, in fact, cards to show)
   *
   * Steps to resolve:
   * 1. Import the useEffect hook
   * 2. Add an empty dependency array
   * 3. Import the `getPeople` helper
   * 4. Add a callback function that receives all users and updates the state
   * 5. Assign that to a constant
   * 6. Return a cleanup function that:
   *  6.1. Clears the timeout (there's one inside the getPeople)
   *  6.2. Executes the `unsubscribe` function.
   * 7. Scroll down to the `renderList` function and follow the instructions there.
   */
  // DO IT HERE.

  /**
   * Handles the click on any of the bottom buttons
   */
  /* function handleOnClickOnButtons() {
    setShowModal(true);
  } */

  /**
   * Handles the click to close modal
   */
  /* function handleOnCloseModal() {
    setShowModal(false);
  } */

  /**
   * Render an array of `Card` components
   *
   * @returns {JSX.Element[]}
   */
  function renderList() {
    // Go through each user and return a `Card` component with the necessary props
    // 1. Pass in the person prop;
    // 2. Don't forget the key 🔑

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
