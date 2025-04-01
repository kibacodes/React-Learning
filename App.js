import React from "react";
import ReactDOM from "react-dom/client";

// ReactElement(Object) => HTML(Browser Understands)

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Namaste React"),
    React.createElement("h2", {}, "by Prashant Chakraborty"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // converts object to h1 tag and puts it on DOM.
