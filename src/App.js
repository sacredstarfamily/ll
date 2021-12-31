import React, { useState } from "react";
import "./styles.css";
import Moralis from "moralis";
import { useMoralis } from "react-moralis";
Moralis.initialize("go0vqtACgpKLrYK5R0AclVjqqFX04NUiTpKpUkj0");
Moralis.serverURL = "https://y2j9ffhdt6bz.usemoralis.com:2053/server";
const initialUser = Moralis.User.current();
export default function App() {
  const [person, setPerson] = useState(initialUser);
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  const onloginW = async () => {
    const person = await Moralis.Web3.authenticate({
      provider: "walletconnect"
    });
    setPerson(person);
  };
  if (!isAuthenticated) {
    return (
      <div>
        <button
          onClick={() =>
            authenticate({
              provider: "walletconnect",
              signingMessage: "Hello World!"
            })
          }
        >
          Authenticate
        </button>
        <p>login with walletconnect</p>
        <button onClick={onloginW}>walletconnect</button>
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
