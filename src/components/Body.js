import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
 const [listOfRestaurants, setListOfRestaurants] = useState([])

 useEffect(()=>{
 fetchData()
 }, [])

 const fetchData =async ()=> {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3924982&lng=78.46796379999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  )

  const json = await data.json()
  console.log(json)
  setListOfRestaurants(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
)
}  

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

