import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard"
import Icons from "./pages/Icons/Icons"
import Notifications from "./pages/Notifications/Notifications"
import TableList from "./pages/TableList/TableList"
import Typography from "./pages/Typography/Typography"
import Upgrade from "./pages/Upgrade/Upgrade"
import UserProfile from "./pages/UserProfile/UserProfile"


import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path ="/" component={Dashboard} />
                    <Route exact path ="/Icons" component={Icons} />
                    <Route exact path ="/Notifications" component={Notifications} />
                    <Route exact path ="/TableList" component={TableList} />
                    <Route exact path ="/Typography" component={Typography} />
                    <Route exact path ="/Upgrade" component={Upgrade} />
                    <Route exact path ="/UserProfile" component={UserProfile} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;