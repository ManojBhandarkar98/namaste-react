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

const RestroCard = (props) => {
    const { restData } = props;
    return (
        <div className="restro-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="rest-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yzgqriufpzmloogcn2vl" alt="rest-logo" />
            <h2>{restData.info.name}</h2>
            <h4>{restData.info.cuisines.join(", ")}</h4>
            <h4>{restData.info.avgRating} rating</h4>
            <h4>{restData.info.sla.deliveryTime} minutes</h4>
        </div>
    );
}
const resObj = 
    {
    "info": {
        "id": "656629",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/be1f8118-0971-405c-936a-84597c29de57_656629.JPG",
        "locality": "Sudha Gauri Arcade",
        "areaName": "Nirala Bazar",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "sandwich",
        "Salads",
        "wrap",
        "Healthy Food"
        ],
        "avgRating": 4.2,
                                        "parentId": "2",
                                            "avgRatingString": "4.2",
                                                "totalRatingsString": "1.4K+",
                                                    "sla": {
            "deliveryTime": 28,
                "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                            "lastMileTravelString": "3.0 km",
                                "iconType": "ICON_TYPE_EMPTY"
            }
        }
    }   





const Body = () => {
    return (
        <div className="wrapper">
            <div className="Search-container">
                Search
            </div>

            <div className="restro-container">
                <RestroCard restData={resObj} />


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