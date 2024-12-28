import { useState } from "react";
import resObj from "../utils/mockData";
import RestroCard from "./RestroCard";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resObj);     //array return , defualt value is empty array we pass behave normal var

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