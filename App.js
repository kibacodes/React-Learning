import React from "react";
import ReactDOM from "react-dom";

// React.createElement => Object => HTMLElement(render)

const heading = React.createElement("h1", { id: heading }, "Namaste React 🚀");

// JSX

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);