import React from "react";

const Navigation = (props) => {
  return (
    <div>
      {props.restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => props.onRestaurantClick(restaurant.id)}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
