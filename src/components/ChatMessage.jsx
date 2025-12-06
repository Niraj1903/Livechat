import { CgProfile } from "react-icons/cg";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex w-full items-start gap-2 px-3 py-2 text-sm hover:bg-gray-100 border-b border-gray-100">
      {/* Avatar */}
      <CgProfile className="mt-0.5 text-2xl text-gray-500" />

      {/* Name + message */}
      <div className="flex flex-col">
        <span className="font-semibold text-xs text-gray-800">{name}</span>
        <span className="text-sm text-gray-900">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
