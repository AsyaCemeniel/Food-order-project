import React from "react";
import Product from "./product";

const Menu = (props) => {
  return (
    <div>
      {props.menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Menu;
