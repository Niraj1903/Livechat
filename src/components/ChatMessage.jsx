const ChatMessage = ({ name, message }) => {
  return (
    <>
      <div>
        <span>{name}</span>
        <span>{message}</span>
      </div>
    </>
  );
};
export default ChatMessage;
