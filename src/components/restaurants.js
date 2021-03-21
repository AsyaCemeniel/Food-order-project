import React, { useMemo, useState } from "react";
import Navigation from "./navigation";
import Restaurant from "./restaurant";

const Restaurants = (props) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    props.restaurants[0].id
  );

  const activeRestaurant = useMemo(
    () =>
      props.restaurants.find(
        (restaurant) => restaurant.id === activeRestaurantId
      ),
    [activeRestaurantId, props.restaurants]
  );

  return (
    <div>
      <Navigation
        restaurants={props.restaurants}
        onRestaurantClick={setActiveRestaurantId}
      />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};

export default Restaurants;
