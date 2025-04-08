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

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="logo-container" 
                className="logo"/>
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
    )
}

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <h3>Olive Garden</h3>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
            </div>
        </div>
    );
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            {/* // Footer */}
        </div>
    );
}




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);