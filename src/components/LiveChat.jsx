import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generate, makeid } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const allChat = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const Interval = setInterval(() => {
      dispatch(
        addMessage({
          name: `${generate()} : `,
          message: makeid(30),
        })
      );
    }, 1000);

    return () => clearInterval(Interval);
  }, [dispatch]);

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
    <div className="flex justify-center items-center w-full mt-6">
      <div className="w-full max-w-md">
        <div className="text-lg font-semibold mb-3 text-gray-800 text-center">
          Live Chat
        </div>

        <div
          className="
            flex flex-col-reverse 
            min-h-96 max-h-96
            border border-gray-300 
            rounded-xl 
            p-3 
            bg-white 
            overflow-y-auto 
            shadow-md
          "
        >
          {allChat.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="mt-3 flex items-center gap-2">
          <input
            type="text"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
            className="
              flex-1 
              px-3 py-2 
              border border-gray-300 
              rounded-full 
              text-sm 
              focus:outline-none 
              focus:ring-2 
              focus:ring-blue-500 
              focus:border-blue-500
            "
            placeholder="Chat..."
          />

          <button
            className="
              px-5 py-2 
              text-sm font-medium 
              bg-blue-600 
              text-white 
              rounded-full 
              hover:bg-blue-700 
              active:scale-95 
              transition
            "
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
