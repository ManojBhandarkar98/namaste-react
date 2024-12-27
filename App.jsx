import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";


//react Element
const jsxHeading = (<h1 id="heading">Namaste React using JSX 🚀</h1>);


//React Functional Component
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);   //render react component - Component first letter Capital
//root.render(jsxHeading);    //render react Element