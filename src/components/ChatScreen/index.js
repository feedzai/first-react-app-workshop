import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Renato A.",
      image: "https://feedzai-react-workshop-2022.web.app/profiles/img-renato.jpg",
      message: "Oix Bruno! Hj tnhu 1 tema bué simbóliko para o Aleixo FM",
    },
    {
      image:
        "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.18169-9/12227767_10153761457592360_133494132698795818_n.jpg?_nc_cat=101&ccb=1-4&_nc_sid=174925&_nc_ohc=EEbBpRJw-ToAX_dUTqJ&_nc_ht=scontent-sjc3-1.xx&oh=69099579c27960b89a37047287340026&oe=6139F3DE",
      message: "Não me digas. Mais uma das tuas porcarias da droga.",
    },
    {
      name: "Renato A.",
      image: "https://feedzai-react-workshop-2022.web.app/profiles/img-renato.jpg",
      message: "Ya! Lol",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU MATCHED WITH RENATO ON 16/03/22</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message..."
        />
        <button className="chatScreen__inputButton" onClick={handleSend} type="submit">
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
