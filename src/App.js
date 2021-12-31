import "./styles.css";
import Moralis from "moralis";
import { useMoralis } from "react-moralis";
export default function App() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div>
        <button
          onClick={() => authenticate({ signingMessage: "Hello World!" })}
        >
          Authenticate
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome {user.get("username")}</h1>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
