import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
// import AddIcon from "material-ui-icons/Add";
import ListIcon from "material-ui-icons/List";
import StarIcon from "material-ui-icons/Star";

// import Game from "./views/Game";
import Games from "./views/Games";
import UserPage from "./views/UserPage/UserPage";
import Leaders from "./views/Leaders";
import AppBar from "./AppBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <AppBar />
          <Switch>
            {/* <Route exact path="/" component={Game} /> */}
            {/* <Route exact path="/game/:gameId" component={Game} /> */}
            <Route path="/user_page" component={UserPage} />
            <Route exact path="/games" component={Games} />
            <Route exact path="/leaders" component={Leaders} />
            <Redirect to="/leaders" />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
