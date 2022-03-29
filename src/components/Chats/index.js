import React, { useState, useEffect } from "react";
import Chat from "../Chat";
import CircularProgress from "@mui/material/CircularProgress";
import { getConversations } from "../../services";
import "./Chats.css";

/**
 * Chats page component.
 *
 * @returns {*}
 */
function Chats() {
  const [messages, setMessages] = useState([]);
  const hasMessages = messages.length > 0;

  /**
   * STEP 5: Get the list of messages from the server
   *
   * How to solve:
   *
   * 1. Just uncomment this code
   *    Since it is very similar to what we've done on step 2, we
   *    can save a little bit of time here.
   */
  /*   useEffect(() => {
    const unsubscribe = getConversations((allMessages) => setMessages(allMessages));

    return () => {
      unsubscribe();
    };
  }, []); */

  function renderMessages() {
    const list = messages.map((msg) => {
      return (
        <Chat
          key={msg.id}
          id={msg.id}
          name={msg.name}
          message={msg.messages[msg.messages.length - 1].message}
          timestamp={msg.timestamp}
          profilePic={msg.profilePicture}
        />
      );
    });

    return list;
  }

  return <div className="chats">{hasMessages ? renderMessages() : <CircularProgress />}</div>;
}

export default Chats;
