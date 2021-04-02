import React from "react";
import PropTypes from "prop-types";

import Rate from "../../rate";
import styles from "./review.module.css";
import { reviewSelector, userSelector } from "../../../redux/selectors";
import { connect } from "react-redux";

const Review = ({ id, review, user }) => {
  const { text, rating } = review;

  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {user.name || "Anonymous"}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {text}
          </p>
        </div>
        <div className={styles.rate}>
          <Rate value={rating} />
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  id: PropTypes.string.isRequired,
  review: PropTypes.shape({
    userId: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default connect((state, ownProps) => ({
  review: reviewSelector(state, ownProps),
  user: userSelector(state, ownProps),
}))(Review);
