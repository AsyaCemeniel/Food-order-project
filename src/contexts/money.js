import { createContext, useState } from "react";

const context = createContext();

const currenciesMap = {
  USD: { label: "USD", rate: 1, sign: "$" },
  RUB: { label: "RUB", rate: 77, sign: "₱" },
  NIS: { label: "NIS", rate: 3.3, sign: "₪" },
};

const currencies = Object.entries(currenciesMap).map(([key, { label }]) => ({
  key,
  label,
}));

export function MoneyProvider({ children }) {
  const [currency, setCurrency] = useState("USD");
  const { rate, sign } = currenciesMap[currency];
  const money = (amount) => `${(rate * amount).toFixed(2)} ${sign}`;

  return (
    <context.Provider value={{ currencies, currency, setCurrency, money }}>
      {children}
    </context.Provider>
  );
}

export default context;
