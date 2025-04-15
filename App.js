import React from "react";
import ReactDOM from "react-dom/client";

/*
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *    - RestaurantCard
 *       - Image
 *       - Name of Restaurant, Star Ratings, cuisine, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const resList = [
  {
    id: "242282",
    name: "McDonald's",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/8874a698-b2fe-4838-a02f-d4288ba3cdf0_242282.JPG",
    locality: "Rajiv Chowk",
    areaName: "Connaught Place",
    costForTwo: "₹400 for two",
    cuisines: ["American", "Burgers", "Fast Food"],
    avgRating: 4.5,
    parentId: "630",
    avgRatingString: "4.5",
    totalRatingsString: "2.9K+",
    deliveryTime: 26,
    lastMileTravel: 2.7,
    serviceability: "SERVICEABLE",
    slaString: "25-30 mins",
    lastMileTravelString: "2.7 km",
  },
  {
    id: "8614",
    name: "Burger King",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/2d2383cf-fab7-4413-917e-ad2a1c41e250_8614.jpg",
    locality: "Connaught Place",
    areaName: "Connaught Place",
    costForTwo: "₹350 for two",
    cuisines: ["American", "Burgers", "Fast Food"],
    avgRating: 4.4,
    parentId: "630",
    avgRatingString: "4.4",
    totalRatingsString: "2.9K+",
    deliveryTime: 26,
    lastMileTravel: 2.7,
    serviceability: "SERVICEABLE",
    slaString: "25-30 mins",
    lastMileTravelString: "2.7 km",
  },
  {
    id: "10477",
    name: "Chaayos Chai+Snacks=Relax",
    cloudinaryImageId: "2beebd3688e63e027ee8a11c1c8a72c8",
    locality: "Connaught Place",
    areaName: "Connaught Place",
    costForTwo: "₹250 for two",
    cuisines: ["Bakery", "Beverages", "Street Food", "Italian", "Desserts"],
    avgRating: 4.6,
    parentId: "630",
    avgRatingString: "4.6",
    totalRatingsString: "2.9K+",
    deliveryTime: 26,
    lastMileTravel: 2.7,
    serviceability: "SERVICEABLE",
    slaString: "25-30 mins",
    lastMileTravelString: "2.7 km",
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="logo-container"
          className="logo"
        />
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
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData;
  // const {name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
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

// worst option <<<< good option <<<<< best option
// not using keys (not acceptable) <<<< index as key <<<<< unique id as key (best practice)

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* // Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
