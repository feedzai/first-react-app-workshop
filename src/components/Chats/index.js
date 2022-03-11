import React from "react";
import Chat from "../Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Renato Alexandre"
        message="Hey what's up?"
        timestamp="40 seconds ago"
        profilePic="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/29389047_10215945309243556_8653258906912423936_n.jpg?_nc_cat=100&ccb=1-4&_nc_sid=174925&_nc_ohc=7JY8NsuwqTIAX-RoN9I&_nc_ht=scontent-sjc3-1.xx&oh=419eb186a13ad16acc30f1ee5aa47331&oe=61397962"
      />
      <Chat
        name="Bussaco"
        message="Hey I'm Kim!"
        timestamp="2 minutes ago"
        profilePic="https://scontent-sjc3-1.xx.fbcdn.net/v/t31.18172-8/10298336_880527628734474_5524791767045544808_o.jpg?_nc_cat=106&ccb=1-4&_nc_sid=174925&_nc_ohc=YU5KfCBSM2UAX_2hS7a&_nc_ht=scontent-sjc3-1.xx&oh=87269833c321151e2f39e3af822faeb3&oe=613B2959"
      />
      <Chat
        name="Busto"
        message="Hey Matt, Didou here!"
        timestamp=" 1 day ago"
        profilePic="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/67205095_10157776722594658_6691330348749422592_n.jpg?_nc_cat=110&ccb=1-4&_nc_sid=174925&_nc_ohc=UrkhavYDCzoAX_rr2c9&tn=pqbk6lAY3_AluJm5&_nc_ht=scontent-sjc3-1.xx&oh=f08f843cbe0d25bf6fd71bd0d297956b&oe=613CB2B3"
      />
    </div>
  );
}

export default Chats;
