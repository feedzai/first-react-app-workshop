import database from "../utils/setupFirebase";

/**
 * Returns a list of conversations
 *
 * @export
 * @param {(listOfMessages: Object[]) => void} callback
 * @returns {() => void}
 */
export function getConversations(callback) {
  const unsubscribe = database.collection("conversations").onSnapshot((snapshot) => {
    const listOfMessages = snapshot.docs.map((doc) => doc.data());

    callback(listOfMessages);
  });

  return unsubscribe;
}
