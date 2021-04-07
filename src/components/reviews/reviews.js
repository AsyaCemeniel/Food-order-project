import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReviewForm from "./review-form";
import Review from "./review";
import styles from "./reviews.module.css";

import { loadReviews, loadUsers } from "../../redux/actions";
import {
  reviewsLoadedSelector,
  reviewsLoadingSelector,
  usersLoadedSelector,
  usersLoadingSelector,
} from "../../redux/selectors";
import Loader from "../loader";

const Reviews = ({
  reviews,
  restaurantId,
  loadReviews,
  loadUsers,
  reviewsLoading,
  reviewsLoaded,
  usersLoading,
  usersLoaded,
}) => {
  useEffect(() => {
    if (!reviewsLoading && !reviewsLoaded && !usersLoading && !usersLoaded) {
      loadUsers(restaurantId);
      loadReviews(restaurantId);
    }
  }, [restaurantId]); //eslint-disable-line

  if (!reviewsLoaded && !usersLoaded) return <Loader />;

  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(
  (state, props) => ({
    reviewsLoading: reviewsLoadingSelector(state, props),
    reviewsLoaded: reviewsLoadedSelector(state, props),
    usersLoading: usersLoadingSelector(state, props),
    usersLoaded: usersLoadedSelector(state, props),
  }),
  { loadReviews, loadUsers }
)(Reviews);
