import { CgProfile } from "react-icons/cg";

const ChatMessage = ({ name, message }) => {
  return (
    <>
      <div className="flex m-2 p-2 text-center">
        <CgProfile className="text-center items-center " />
        <span className="text-center">{name}</span>
        <span className="text-center">{message}</span>
      </div>
    </>
  );
};
export default ChatMessage;
