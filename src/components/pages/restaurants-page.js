import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Restaurants from "../restaurants";
import Loader from "../loader";

import {
  restaurantsListSelector,
  restaurantsLoadingSelector,
  restaurantsLoadedSelector,
} from "../../redux/selectors";
import { loadRestaurants } from "../../redux/actions";

function RestaurantsPage({
  restaurants,
  loadRestaurants,
  loading,
  loaded,
  match,
  history,
}) {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, []); //eslint-disable-line

  if (loading || !loaded) return <Loader />;

  if (match.isExact) {
    if (loaded) {
      return (
        <Redirect to="/restaurants/a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2/menu" />
      );
    }
    return (
      <>
        <Restaurants match={match} history={history} />
        <h2 style={{ textAlign: "center" }}>Select restaurant</h2>
      </>
    );
  }

  return <Route path="/restaurants/:restId" component={Restaurants} />;
}

export default connect(
  (state) => ({
    restaurants: restaurantsListSelector(state),
    loading: restaurantsLoadingSelector(state),
    loaded: restaurantsLoadedSelector(state),
  }),
  { loadRestaurants }
)(RestaurantsPage);
