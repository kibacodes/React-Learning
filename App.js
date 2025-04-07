import React from "react";
import ReactDOM from "react-dom/client";

// const Title = () => (
//   <h1 id="head" tabIndex="5">
//     Namaste React using JSX 🚀
//   </h1>
// );


const title =  (
    <h1 id="head1" tabIndex="5">
      Namaste React using JSX 🚀
    </h1>
  );

//const data = api.getData();
// JSX prevents Cross Site Scripting (XSS)

const HeadingComponent = () => (
    <div id="container">
      {title}
      {/* {data} */}
      <h1 className="heading">Namaste React Functional Component</h1>
    </div>
  );





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);