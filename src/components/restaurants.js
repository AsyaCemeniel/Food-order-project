import React, { useMemo, useState } from "react";
import Menu from "./menu";
import Navigation from "./navigation";

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
      <Menu menu={activeRestaurant.menu} />
    </div>
  );
};

export default Restaurants;
