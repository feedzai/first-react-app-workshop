import database from "../utils/setupFirebase";

const FAKE_DELAY = 1500;

/**
 * Returns a list of people and emulates a fake server waiting
 *
 * @export
 * @param {(listOfPeople: Object[]) => void} callback
 * @returns {() => void}
 */
export function getPeople(callback) {
  const unsubscribe = database.collection("people").onSnapshot((snapshot) => {
    const listOfPeople = snapshot.docs.map((doc) => doc.data());

    // Let's fake a little bit of server waiting...5 seconds
    setTimeout(() => {
      if (listOfPeople.length > 0) {
        callback(listOfPeople);
      }
    }, FAKE_DELAY);
  });

  return unsubscribe;
}
