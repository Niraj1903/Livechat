import { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const Interval = setInterval(() => {}, 2000);
    return () => clearInterval(Interval);
  }, []);

  return (
    <>
      <div>LiveChat</div>
      <ChatMessage name={"Live"} message={"chat"} />
      <ChatMessage name={"Live"} message={"chat"} />
      <ChatMessage name={"Live"} message={"chat"} />
    </>
  );
};

export default LiveChat;
