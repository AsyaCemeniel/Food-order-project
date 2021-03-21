import React from "react";
import Rate from "./rate";

const Reviews = (props) => {
  return (
    <div className="reviews">
      {props.reviews.map((review) => (
        <div className="review" key={review.id}>
          <h4>
            {review.user}: {review.text}
          </h4>
          <Rate rating={review.rating} />
          <br />
        </div>
      ))}
    </div>
  );
};

export default Reviews;
