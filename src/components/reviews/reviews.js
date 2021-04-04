import React from "react";
import PropTypes from "prop-types";
import ReviewForm from "./review-form";
import Review from "./review";
import styles from "./reviews.module.css";

const Reviews = ({ reviewsId, restaurantId }) => {
  return (
    <div className={styles.reviews}>
      {reviewsId.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  reviewsId: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Reviews;
