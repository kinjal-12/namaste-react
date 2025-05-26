// const heading = React.createElement('h1', { id: "heading" }, "Hello World from React!!");

// console.log(heading); // object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // convert it to h1 tag put it up in the root

/**
 * 
 * <div id="parent"><div id="child"><h1>I am an h1 tag</h1></div></div>
 * 
 */


const parent = React.createElement(
    "div", { id: "parent"}, 
    [React.createElement("div", { id: "child" }, 
        [ React.createElement("h1", {}, "I am an h1 tag"), React.createElement("h2", {}, "I an an h2 tag") ]
    ), React.createElement("div", { id: "child2" }, 
        [ React.createElement("h1", {}, "I am an h1 tag"), React.createElement("h2", {}, "I an an h2 tag") ]
    )]);

// JSX to simplify this[React can be written in .jsx as well as .js]

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // root.render replace(not append) existing by whatever(parent) is passing now 

console.log(parent);

