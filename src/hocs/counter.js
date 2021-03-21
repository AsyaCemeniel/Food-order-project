import React from "react";
import useAmount from "../hooks/use-amount";

export default (WrappedComponent) => (props) => {
  const amountProps = useAmount();
  return <WrappedComponent {...props} {...amountProps} />;
};
