import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => (React Element) JS Object => HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "Namaste React🚀");
console.log(heading);

// JSX - not html in js, but it is html like syntax
// Not valid JS, browser don't understand, JS engine csn't read
// Parcel is doing job behind the scenes
// JSX (transpiled before it reaches the JS engine) - PARCEL - Babel compile/transpile(JSX -> JS)
// JSX => React.createElement => (React Element) JS Object => HTMLElement(render)

// React Element
const jsxHeading = (
  <h1 className="head" tabIndex="2">
    Namaste React using JSX(React Element) 🚀
  </h1>
);

// React Component
// Class based Component - Old way - Use Js Classes

// Functional Component - New Way - Use JS Functions
const Title = () => (
  <h1 className="head" tabIndex="2">
    Namaste React using First Functional Component 🚀
  </h1>
);

// Component inside component => Component composition
const HeadingComponent = () => (
  <div id="container">
    {jsxHeading}
    <Title/>
    {/* OR <Title></Title> */}
    {/* {Title()} */}
    <h1 className="heading"> Namaste React Second Functional Component 🚀🚀 </h1>
  </div>
);

// OR
// const HeadingComponent2 = () => {
//  return <h1> Namaste React Functional Component </h1>
// };
// OR
// const fn = () => true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
