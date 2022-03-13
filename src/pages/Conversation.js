import { CircularProgress } from "@material-ui/core";
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
      const conversation = allMessages.find((message) => message.id === location.state.id);

      if (conversation) {
        setChat(conversation);
      }
    });

    // When the component unmounts, remove the messages subscription and the fake timeout
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
