import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./basket.module.css";
import BasketRow from "./basket-row";
import BasketItem from "./basket-item";
import Button from "../button";
import { orderProductsSelector, totalSelector } from "../../redux/selectors";

import { Consumer as UserConsumer } from "../../contexts/user";

function Basket({ title = "Basket", total, orderProducts }) {
  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  return (
    <div className={styles.basket}>
      <h4 className={styles.title}>
        <UserConsumer>{({ userName }) => `${userName}'s basket`}</UserConsumer>
      </h4>
      {orderProducts.map(({ product, amount, subtotal, restaurantId }) => (
        <BasketItem
          product={product}
          amount={amount}
          key={product.id}
          subtotal={subtotal}
          restaurantId={restaurantId}
        />
      ))}
      <hr className={styles.hr} />
      <BasketRow label="Sub-total" content={`${total} $`} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={`${total} $`} bold />
      <Link to="/checkout">
        <Button primary block>
          checkout
        </Button>
      </Link>
    </div>
  );
}

export default connect((state) => ({
  total: totalSelector(state),
  orderProducts: orderProductsSelector(state),
}))(Basket);
