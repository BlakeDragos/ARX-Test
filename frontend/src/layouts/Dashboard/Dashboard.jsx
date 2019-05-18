import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NotificationSystem from "react-notification-system";
import DashboardPg from "../../pages/Dashboard/Dashboard";
import UserProfile from "../../pages/UserProfile/UserProfile";
import TableList from "../../pages/TableList/TableList";
import API from "../../utils/API"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";

import { style } from "../../variables/Variables.jsx";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleNotificationClick = this.handleNotificationClick.bind(this);
    this.state = {
      _notificationSystem: null,
      pass: []
    };
  }
  handleNotificationClick(position) {
   
    this.state._notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s-gift" />,
      message: (
        <div>
          Welcome to the <b>ARX web-app</b>
        </div>
      ),
      level: "success",
      position: position,
      autoDismiss: 5
    });
  }

  componentDidMount() {
    this.setState({ _notificationSystem: this.refs.notificationSystem });
    var _notificationSystem = this.refs.notificationSystem;
    _notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s-gift" />,
      message: (
        <div>
          Welcome to the <b>ARX web-app</b>
        </div>
      ),
      level: "success",
      position: "tr",
      autoDismiss: 15
    });
  }
  componentWillMount(){
    this.loadData();
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  loadData = () => {
    let body = {
      name: "Blake Dragos"
    }
    API.getData(body)
      .then(res => {
        let response = res.data
        this.setState({pass: response});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="wrapper">
        <NotificationSystem ref="notificationSystem" style={style} />
        <Sidebar {...this.props} />
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <Header {...this.props} />
          <Switch>
              {/* <Redirect from="/" to="/dashboard"/>; */}
              <Route exact path="/dashboard" render={(routerProps) => <DashboardPg {...routerProps} {...this.state}/>}/>
              <Route exact path="/user" render={(routerProps) => <UserProfile {...routerProps} {...this.state}/>}/>
              <Route exact path="/table" render={(routerProps) => <TableList {...routerProps} {...this.state}/>}/>
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Dashboard;
