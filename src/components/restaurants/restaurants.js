import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Restaurant from "../restaurant";
import Tabs from "../tabs";
import { restaurantsSelector } from "../../redux/selectors";

const Restaurants = ({ restaurants }) => {
  const tabs = Object.values(restaurants).map((restaurant) => ({
    title: restaurant.name,
    content: <Restaurant restaurant={restaurant} />,
  }));

  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.object.isRequired,
};

export default connect((state) => ({
  restaurants: restaurantsSelector(state),
}))(Restaurants);
