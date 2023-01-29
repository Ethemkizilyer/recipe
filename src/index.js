import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store";

import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./assets/styles/globalStyles";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<div>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </BrowserRouter>
</div>
);


