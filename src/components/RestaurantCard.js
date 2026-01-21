import restaurantList from "../utils/mockData";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurantData }) => {
  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = restaurantData.info;
  return (
    <div className="res-card">
      <img className="card-img" src={CDN_URL + cloudinaryImageId} alt={name} />

      <div className="res-details">
        <h4> {name} </h4>
        <div>
          <h3> {avgRating} ⭐</h3>
          <h3>{deliveryTime} mins</h3>
          <h3>{costForTwo}</h3>
        </div>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{areaName}</h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
