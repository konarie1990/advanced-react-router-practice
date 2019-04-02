import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Charts from "./components/Charts";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div id="wrapper">
          <nav
            className="navbar navbar-inverse navbar-fixed-top"
            role="navigation"
          >
            <TopNav />
            <SideNav />
          </nav>
          <div style={{ backgroundColor: "white" }}>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/charts" component={Charts} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
