import React from "react";
import ListConvosDesktop from "./ListConvosDesktop";
import MessageConversation from "../MessageConversation";

export default function MessageMainDesktop(props) {
  return (
    <>
      <ListConvosDesktop
        setChats={props.setChats}
        chats={props.chats}
        setCurrentChat={props.setCurrentChat}
      />
      {props.currentChat && Object.keys(props.currentChat).length > 0 && (
        <MessageConversation
          socket={props.socket}
          messages={props.messages}
          setMessages={props.setMessages}
          currentChat={props.currentChat}
          scrollRef={props.scrollRef}
        />
      )}
    </>
  );
}
