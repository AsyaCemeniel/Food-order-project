import React from "react";
import PropTypes from "prop-types";

import Product from "../product";

import styles from "./menu.module.css";
import Basket from "../basket";
import { connect } from "react-redux";
import { loadProducts } from "../../redux/actions";
import {
  productsLoadedSelector,
  productsLoadingSelector,
} from "../../redux/selectors";
import Loader from "../loader";

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = {
    error: null,
  };

  componentDidCatch(error) {
    this.setState({ error });
  }

  componentDidMount() {
    const { restaurantId, loadProducts, loading, loaded } = this.props;
    if (!loading && !loaded) loadProducts(restaurantId);
  }

  componentDidUpdate(prevProps) {
    const { restaurantId, loadProducts, loading, loaded } = this.props;
    if (restaurantId !== prevProps.restaurantId) {
      if (!loading && !loaded) loadProducts(restaurantId);
    }
  }

  render() {
    const { menu, loading, loaded } = this.props;

    if (this.state.error) {
      return <h1>{this.state.error.message}</h1>;
    }

    if (loading || !loaded) return <Loader />;

    return (
      <div className={styles.menu}>
        <div>
          {menu.map((id) => (
            <Product key={id} id={id} />
          ))}
        </div>
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    loading: productsLoadingSelector(state, props),
    loaded: productsLoadedSelector(state, props),
  }),
  { loadProducts }
)(Menu);
