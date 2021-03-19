import React from "react";
import counter from "../hocs/counter";
//icons
import minus from "../icons/minus.svg";
import plus from "../icons/plus.svg";

const Product = (props) => {
  const { count, decrement, increment } = props;

  return (
    <div>
      <p>{props.product.name}</p>
      <p>{props.product.price}$</p>

      <button onClick={decrement}>
        <img src={minus} alt="minus" />
      </button>
      {count}
      <button onClick={increment}>
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
};

export default counter(Product);
