import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { orderErrorSelector } from "../../redux/selectors";
import Button from "../button";

const ErrorPage = ({ error }) => (
  <h1 style={{ textAlign: "center", margin: 150 }}>
    <p>{error}</p>
    <div style={{ width: 300, margin: "0 auto" }}>
      <Link to="/checkout">
        <Button primary block>
          Back to checkout
        </Button>
      </Link>
    </div>
  </h1>
);

export default connect((state) => ({
  error: orderErrorSelector(state),
}))(ErrorPage);
