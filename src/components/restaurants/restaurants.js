import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Restaurant from "../restaurant";
import Loader from "../loader";

import {
  restaurantsListSelector,
  restaurantsLoadingSelector,
  restaurantsLoadedSelector,
} from "../../redux/selectors";
import { loadRestaurants } from "../../redux/actions";

import styles from "./restaurants.module.css";

const Restaurants = ({
  restaurants,
  loadRestaurants,
  loading,
  loaded,
  match,
  history,
}) => {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, []); //eslint-disable-line

  if (loading || !loaded) return <Loader />;

  const { restId } = match.params;

  const restaurant = restaurants.find((rest) => rest.id === restId);

  return (
    <>
      <div className={styles.tabs}>
        {restaurants.map(({ id, name }, index) => (
          <NavLink
            key={id}
            className={styles.tab}
            activeClassName={styles.active}
            to={`/restaurants/${id}`}
          >
            {name}
          </NavLink>
        ))}
      </div>
      <Restaurant {...restaurant} />,
    </>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect(
  (state) => ({
    restaurants: restaurantsListSelector(state),
    loading: restaurantsLoadingSelector(state),
    loaded: restaurantsLoadedSelector(state),
  }),
  { loadRestaurants }
)(Restaurants);
