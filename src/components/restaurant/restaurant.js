import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Menu from "../menu";
import Reviews from "../reviews";
import Banner from "../banner";
import Rate from "../rate";
import Tabs from "../tabs";
import { connect } from "react-redux";
import { averageRatingSelector } from "../../redux/selectors";

//TODO
const Restaurant = ({ restaurant, averageRating }) => {
  const { name, menu, reviews } = restaurant;

  const tabs = [
    { title: "Menu", content: <Menu menu={menu} /> },
    { title: "Reviews", content: <Reviews reviewsId={reviews} /> },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} />
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array,
  }).isRequired,
  averageRating: PropTypes.number.isRequired,
};

export default connect((state, ownProps) => ({
  averageRating: averageRatingSelector(state, ownProps),
}))(Restaurant);
