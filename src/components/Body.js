import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);     //array return , defualt value is empty array we pass behave normal var

    const [searchText,setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json()

        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    // if (listOfRestaurants.length == 0)
    //     return <Shimmer />;      //ternary operator

    return (listOfRestaurants.length == 0)?<Shimmer />:(
        <div className="wrapper">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                    <button onClick={()=>{
                        const filteredRestaurant = listOfRestaurants.filter((res)=>{res.data.name.toLowerCase().includes(searchText.toLowerCase())})
                        setListOfRestaurants(filteredRestaurant)
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.data.avgRating > 4
                    );
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurant </button>
            </div>

            <div className="restro-container">
                {
                    listOfRestaurants.map(restaurant =>
                        <RestroCard key={restaurant.data.id} restData={restaurant} />)
                }
            </div>

        </div>
    );
}
export default Body;