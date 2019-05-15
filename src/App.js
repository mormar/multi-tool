import React from "react";
import Deposit from "./components/Deposit";
import Header from "./layouts/Header";
import GlobalStyle from "./Global";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Page404 from "./components/Page404"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Deposit} />
        <Route component={Page404}/>
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
