import React from "react";
import Chat from "../Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Renato Alexandre"
        message="ya! lol"
        timestamp="40 seconds ago"
        profilePic="https://feedzai-react-workshop-2022.web.app/profiles/img-renato.jpg"
      />
      <Chat
        name="Bussaco"
        message="😡"
        timestamp="2 minutes ago"
        profilePic="https://feedzai-react-workshop-2022.web.app/profiles/img-bussaco.jpg"
      />
      <Chat
        name="Busto"
        message="Fogo Bruno, não podes ser um pouco mais razoável?"
        timestamp="1 day ago"
        profilePic="https://feedzai-react-workshop-2022.web.app/profiles/img-busto.jpg"
      />
    </div>
  );
}

export default Chats;
