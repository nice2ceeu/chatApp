import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import { auth } from "./components/firebase";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import ChatRoom from "./components/ChatRoom";

export default function ChatBox() {
  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      
      <header>
        <h1>Cheat Chat</h1>
        <SignOut />
        {auth.currentUser && <img src={auth.currentUser.photoURL} alt="User Avatar" />}
      
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}
