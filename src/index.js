import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


// set up redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./redux/reducers/rootReducer";

// tạo ra store tổng ứng dụng 
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

