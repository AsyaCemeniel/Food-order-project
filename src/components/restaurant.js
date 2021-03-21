import React from "react";
import Menu from "./menu";
import Reviews from "./reviews";
import Rate from "./rate";

const Restaurant = (props) => {
  const averageRating =
    props.restaurant.reviews.reduce((total, review) => {
      return total + review.rating;
    }, 0) / props.restaurant.reviews.length;

  return (
    <div>
      <h1>{props.restaurant.name}</h1>
      <Rate rating={averageRating.toFixed(1)} />
      <hr />
      <h2>Menu:</h2>
      <Menu menu={props.restaurant.menu} />
      <hr />
      <Reviews reviews={props.restaurant.reviews} />
    </div>
  );
};

export default Restaurant;
