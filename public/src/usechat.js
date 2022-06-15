// importing dependencies 
import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const new_message_event = "newChatMessage";
const socket_url = "http://localhost:4000";

const useChat = (roomId) => {

  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {

    socketRef.current = socketIOClient(socket_url, {

      query: { roomId },

    });

    socketRef.current.on(new_message_event, (message) => {

      const incomingMessage = {

        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,

      };

      setMessages((messages) => [...messages, incomingMessage]);

    });

    return () => {

      socketRef.current.disconnect();

    };

  }, [roomId]);

  // sending messages
  const sendMessage = (messageBody) => {

    // emits the new message to the room and finds sender id
    socketRef.current.emit(new_message_event, {

      body: messageBody,
      senderId: socketRef.current.id,
    
    });

  };

  return { messages, sendMessage };
  
};

export default useChat;