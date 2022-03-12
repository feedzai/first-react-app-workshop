import React from "react";
import { ChatScreen } from "../../components";
import PageTemplate from "../PageTemplate";

function Conversation() {
  return (
    <PageTemplate backButton="/chat">
      <ChatScreen />
    </PageTemplate>
  );
}

export default Conversation;
