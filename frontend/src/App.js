import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import BookingsPage from "./pages/Bookings";
import EventsPage from "./pages/Events";
import AuthPage from "./pages/Auth";
import Nav from "./components/Nav/Nav.js";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="content">
        <Switch>
          <Redirect from="/" to="/auth" exact />
          <Route path="/auth" component={AuthPage}></Route>
          <Route path="/events" component={EventsPage}></Route>
          <Route path="/bookings" component={BookingsPage}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
