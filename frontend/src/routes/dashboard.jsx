import Dashboard from "../pages/Dashboard/Dashboard";
import UserProfile from "../pages/UserProfile/UserProfile";
import TableList from "../pages/TableList/TableList";


const dashboardRoutes = [
  {
    path: "/app/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/app/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/app/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: TableList
  },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
