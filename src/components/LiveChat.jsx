import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const allChat = useSelector((store) => store.chat.messages);
  console.log(allChat);
  useEffect(() => {
    const Interval = setInterval(() => {
      dispatch(
        addMessage({
          name: "Niraj",
          message: "This is Live Chat",
        })
      );
    }, 2000);
    return () => clearInterval(Interval);
  }, []);

  return (
    <>
      <div>LiveChat</div>
      {allChat.map((c, index) => (
        <ChatMessage key={index} name={c.name} message={c.message} />
      ))}
    </>
  );
};

export default LiveChat;
