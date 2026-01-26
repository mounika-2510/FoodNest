import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurantData }) => {
  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    sla,
     aggregatedDiscountInfoV3,
  } = restaurantData.info;
  return (
    <div className="res-card">
     {/* img section */}
     <div className="img-container">
      <img className="card-img" src={CDN_URL + cloudinaryImageId} alt={name} />
      {aggregatedDiscountInfoV3 && (
        <div className="offer">
          {aggregatedDiscountInfoV3.header}{""}
          {aggregatedDiscountInfoV3.subHeader}
        </div> 
      )}
     </div>
  {/* details section */}
     <div className="res-details">
        <h4 className="res-name">{name}</h4>

        <div className="meta">
          <span className="rating">⭐ {avgRating}</span>
          <span>{sla?.slaString}</span>
          <span>{costForTwo}</span>
        </div>

        <p className="cuisines">{cuisines.join(", ")}</p>
        <p className="area">{areaName}</p>
      </div>
     </div>
  );
};

export default RestaurantCard;
