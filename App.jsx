import React from "react";
import ReactDOM from "react-dom/client";

//react Element
const jsxHeading = (<h1 id="heading">Namaste React using JSX 🚀</h1>);

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

//React Functional Component
const AppLayout = () => {
    return (
        <div className="app">
            <Header />


        </div>);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);   //render react component - Component first letter Capital
//root.render(jsxHeading);    //render react Element