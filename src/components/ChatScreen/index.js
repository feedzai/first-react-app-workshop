import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./ChatScreen.module.scss";

function ChatScreen({ chat }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(chat.messages);

  function handleSend(event) {
    // Prevents the default form submit action
    event.preventDefault();

    // On the set of messages, adds the last one at the bottom
    const newMessages = [...messages];

    newMessages.push({
      message: input,
    });

    // Updates the state with the new messages and clears out the input
    setMessages(newMessages);
    setInput("");
  }

  /**
   * Renders a list of messages
   *
   * @returns {JSX.Element}
   */
  function renderMessagesList() {
    const list = messages.map((message, index) => {
      const key = index;

      if (message.name) {
        return (
          <li key={key} className={styles.message}>
            <Avatar className={styles.image} alt={message.name} src={message.img} />
            <p className={styles.text}>{message.message}</p>
          </li>
        );
      }

      return (
        <li key={key} className={styles.message}>
          <p className={styles.textUser}>{message.message}</p>
        </li>
      );
    });

    return (
      <ul id="chat-content" className={styles.list} aria-label="Chat content" tabIndex={0}>
        {list}
      </ul>
    );
  }

  const placeholder = "Enviar mensagem...";

  return (
    <div className={styles.chatScreen}>
      {renderMessagesList()}
      <form className={styles.input}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.inputField}
          type="text"
          placeholder={placeholder}
        />
        <button className={styles.inputButton} onClick={handleSend} type="submit">
          Enviar
          <span className="sr-only">mensagem</span>
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
