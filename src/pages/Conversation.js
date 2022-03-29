import CircularProgress from "@mui/material/CircularProgress";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { ChatScreen } from "../components";
import { getConversations } from "../services";
import PageTemplate from "./PageTemplate";

function Conversation() {
  const [chat, setChat] = useState();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = getConversations((allMessages) => {
      // Using the `find` method we can pick the message we want
      // by comparing the source id with our location state id.
      // If if matches, that's our guy!
      const conversation = allMessages.find((message) => message.id === location.state.id);

      // We only update the state if we have an actually usable result
      if (conversation) {
        setChat(conversation);
      }
    });

    // When the component unmounts, remove the messages subscription
    return () => {
      unsubscribe();
    };
  }, [location.state.id]);

  if (chat) {
    return (
      <PageTemplate backButton="/chat">
        <ChatScreen chat={chat} />
      </PageTemplate>
    );
  }

  return <CircularProgress />;
}

export default Conversation;
