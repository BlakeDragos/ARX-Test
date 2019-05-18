import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./layouts/Dashboard/Dashboard";
import Login from "./layouts/Login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

ReactDOM.render(
    <Router>
        <div>
            <Switch>
            <Route path= "/" component={Dashboard} />
            <Route exact path="/login" component={Login}/>
            </Switch>
        </div>
    </Router>, document.getElementById("root"));
