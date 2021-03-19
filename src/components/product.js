import React from "react";
import useAmount from "../hooks/use-amount";

const Product = (props) => {
  const { count, decrement, increment } = useAmount(0);

  return (
    <div>
      <p>{props.product.name}</p>
      <p>{props.product.price}$</p>

      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Product;
