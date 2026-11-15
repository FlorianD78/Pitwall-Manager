import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// No <React.StrictMode>: the race simulation emits events and sounds from its
// state updaters, which StrictMode would deliberately run twice in development.
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
