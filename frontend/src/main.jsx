import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import GlobalStyles from "./styles/GlobalStyles.js";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
