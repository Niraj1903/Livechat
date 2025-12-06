import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generate, makeid } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const allChat = useSelector((store) => store.chat.messages);
  console.log(allChat);
  useEffect(() => {
    const Interval = setInterval(() => {
      dispatch(
        addMessage({
          name: `${generate()} : `,
          message: makeid(30),
        })
      );
    }, 2000);
    return () => clearInterval(Interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLiveMessage("");
    dispatch(
      addMessage({
        name: "Niraj",
        message: liveMessage,
      })
    );
  };

  return (
    <>
      <div>LiveChat</div>
      <div className="flex-col-reverse min-h-32 border-black">
        {allChat.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button>Send</button>
      </form>
    </>
  );
};

export default LiveChat;
