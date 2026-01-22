import restaurantList from "../utils/mockData";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
 const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList)
  return (
    <div className="body">
      <div className="search">
      <button 
       onClick={()=>{
  const filteredList = listOfRestaurants.filter(
        (res)=>res.info.avgRating > 4)
       setListOfRestaurants(filteredList)
       console.log(filteredList)
       }}
       >
        Top Rated Restarantrs
      </button>
        </div>
      <div className="res-container">
       {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
