import resObj from "../utils/mockData";
import RestroCard from "./RestroCard";




const Body = () => {
    return (
        <div className="wrapper">
            <div className="filter">
               <button className="filter-btn" onClick={()=>{
                
               }}>Top Rated Restaurant </button>
            </div>

            <div className="restro-container">
                {
                    resObj.map(restaurant => <RestroCard key ={restaurant.info.id} restData={restaurant} />)
                }
            </div>

        </div>
    );
}
export default Body;