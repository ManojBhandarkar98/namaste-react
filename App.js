import React from "react";
import ReactDOM from "react-dom/client";

//react Element
const jsxHeading = (<h1 id="heading">Namaste React using JSX 🚀</h1>);

const Title = () => (
    <h1 id="heading">Namaste React using JSX 🚀</h1>
);

//React Functional Component
const Heading = () => {
    return (
        <div id="container">
            <Title />       //React functional component render in heading component    OR Component Composition
            {jsxHeading}    //javascript code we can excute in JSX
            <h1 id="heading">Namaste React using JSX 🚀</h1>
        </div>);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);   //render react component - Component first letter Capital
//root.render(jsxHeading);    //render react Element