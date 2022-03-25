import React from "react";
import { Chats } from "../components";
import PageTemplate from "./PageTemplate";

function ChatsPage() {
  return (
    <PageTemplate backButton="/">
      <Chats />
    </PageTemplate>
  );
}

export default ChatsPage;
