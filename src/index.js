import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <MoralisProvider
      appId="go0vqtACgpKLrYK5R0AclVjqqFX04NUiTpKpUkj0"
      serverUrl="https://y2j9ffhdt6bz.usemoralis.com:2053/server"
    >
      <App />
    </MoralisProvider>
  </StrictMode>,
  rootElement
);
