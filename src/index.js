import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { Auth0Provider } from "@auth0/auth0-react";


import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Auth0Provider
       domain="dev-jpr60ht5.us.auth0.com"
       clientId="s0OzlM1MElFjdjtNgq8fwVBsD2Ko3jiG"
       redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
  rootElement
);
