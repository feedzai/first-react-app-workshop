import { CircularProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { ChatScreen } from "../components";
import { getConversations } from "../services";
import PageTemplate from "./PageTemplate";

function Conversation() {
  const [chat, setChat] = useState();
  const location = useLocation();

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
