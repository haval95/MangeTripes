import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { Auth0Provider } from "@auth0/auth0-react";
const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Auth0Provider
    domain="dev-e1qz58oz.us.auth0.com"
    clientId="70T4XCJWWfJrdAVWcKcRwbfVwkEFlbbP"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <BrowserRouter basename={baseUrl}>
        <App />
      </BrowserRouter>
    </Provider>
  </Auth0Provider>,
  rootElement
);

registerServiceWorker();
