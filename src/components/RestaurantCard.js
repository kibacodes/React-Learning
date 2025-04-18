import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData;
    // const {name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.data;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          src={
            CDN_URL +
            resData.cloudinaryImageId
          }
          alt="res-logo"
          className="res-logo"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    );
  };

export default RestaurantCard;