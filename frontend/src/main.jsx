import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BookInfoProvider from "./store/BookInfoProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BookInfoProvider>
    <App />
  </BookInfoProvider>
);
