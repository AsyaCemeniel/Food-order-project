import React from "react";
import { connect } from "react-redux";

import styles from "./order.module.css";

import MinusIcon from "../../icons/minus.svg";
import PlusIcon from "../../icons/plus.svg";
import Trash from "../../icons/trash.svg";

import { decrement, deleteItem, increment } from "../../redux/actions";

const Order = ({ order, increment, decrement, deleteItem }) => {
  const total = Object.values(order)?.reduce((total, item) => {
    return total + item.amount * item.product?.price;
  }, 0);

  return (
    <div className={styles.order}>
      <h2>Your Order:</h2>
      <div>
        <ul>
          {Object.values(order)?.map((item) => {
            return (
              <li key={item.product?.id}>
                <div className={styles.item}>
                  <h3>{item.product?.name}</h3>
                  <h4>{item.amount}</h4>
                  <h4>{item.amount * item.product?.price}$</h4>
                  <div className={styles.buttons}>
                    <button
                      className={styles.button}
                      onClick={() => decrement(item.product)}
                    >
                      <img src={MinusIcon} alt="minus" />
                    </button>
                    <button
                      className={styles.button}
                      onClick={() => increment(item.product)}
                    >
                      <img src={PlusIcon} alt="plus" />
                    </button>
                    <button
                      className={styles.button}
                      onClick={() => deleteItem(item.product)}
                    >
                      <img src={Trash} alt="trash" />
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2>Total: {total}$</h2>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order,
});

const mapDispatchToProps = {
  increment,
  decrement,
  deleteItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
