import React from "react";
import LandingPage from "./components/LandingPage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import MovieDetail from "./components/movieDetail";
import "./App.css";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducers, {}, applyMiddleware(thunk));
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/:id' component={MovieDetail} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
