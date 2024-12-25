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

const RestroCard = () => {
    return (
        <div className="restro-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="rest-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yzgqriufpzmloogcn2vl" alt="rest-logo" />
            <h2>Meghna Foods</h2>
            sdsd
        </div>
    );
}

const Body = () => {
    return (
        <div className="wrapper">
            <div className="Search-container">
                Search
            </div>
           
            <div className="restro-container">
            <RestroCard />
            </div>

        </div>
    );
}

//React Functional Component
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
           
        </div>);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);   //render react component - Component first letter Capital
//root.render(jsxHeading);    //render react Element