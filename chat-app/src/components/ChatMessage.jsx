import { auth } from "../components/firebase";

function ChatMessage({ message }) {
  const { text, uid, photoURL } = message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL || "https://via.placeholder.com/40"} alt="User Avatar" />
      <p>{text}</p>
    </div>
  );
}

export default ChatMessage;
