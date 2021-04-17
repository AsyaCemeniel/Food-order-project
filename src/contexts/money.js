import React, { createContext, useState } from "react";

const context = createContext();

const currenciesMap = {
  USD: { label: "USD", rate: 1, sign: "$" },
  EUR: { label: "EUR", rate: 0.9, sign: "€" },
  RUB: { label: "RUB", rate: 70, sign: "₽" },
  UAH: { label: "UAH", rate: 27, sign: "₴" },
};

const currencies = Object.entries(currenciesMap).map(([key, { label }]) => ({
  key,
  label,
}));

export function MoneyProvider({ children }) {
  const [currency, setCurrency] = useState("USD");
  const { rate, sign } = currenciesMap[currency];
  const m = (amount) => `${(rate * amount).toFixed(2)} ${sign}`;

  return (
    <context.Provider value={{ currencies, currency, setCurrency, m }}>
      {children}
    </context.Provider>
  );
}

export default context;
