// React
import React from "react";
import { createRoot } from "react-dom/client";
// Redux
import { Provider } from "react-redux";
import store from "./app/store";
// Auth0
import { Auth0Provider } from "@auth0/auth0-react";
// Components
import App from "./App";
// Styles
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/dist/ReactToastify.css";

const domain = "dev-gk648gi6mr0lol6y.us.auth0.com"
const clientId = "a57SfDvY4jJ7cGt5TNgkfeM7nIe4W7LM"

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
