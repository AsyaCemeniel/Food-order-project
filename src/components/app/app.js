import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import RestaurantsPage from "../pages/restaurants-page";
import Header from "../header";
import Basket from "../basket";
import { Provider as UserProvider } from "../../contexts/user";
import SuccessPage from "../pages/success-page";
import ErrorPage from "../pages/error-page";

const App = () => {
  const [userName, setName] = useState("Ivan");

  useEffect(() => {
    //  setInterval(() => setName(Math.random().toString()), 3000);
  }, []);

  return (
    <div>
      <UserProvider value={{ userName, setName }}>
        <Header />
        <Switch>
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/order-success" component={SuccessPage} />
          <Route path="/order-error" component={ErrorPage} />
          <Route path="/error" render={() => <h1>Error Page</h1>} />
          <Redirect from="/" to="/restaurants" />
        </Switch>
      </UserProvider>
    </div>
  );
};
export default App;
