import { useContext } from "react";
import moneyContext from "../contexts/money";

export function useMoney() {
  const { money } = useContext(moneyContext);
  return money;
}
