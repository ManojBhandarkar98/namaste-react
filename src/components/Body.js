import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);     //array return , defualt value is empty array we pass behave normal var

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch("&origin=*"+"https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json.data.cards[0].card.card.imageGridCards.info);
    }

    return (
        <div className="wrapper">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurant </button>
            </div>

            <div className="restro-container">
                {
                    listOfRestaurants.map(restaurant =>
                        <RestroCard key={restaurant.info.id} restData={restaurant} />)
                }
            </div>

        </div>
    );
}
export default Body;