
import Dashboard from "views/Dashboard.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/logs",
    name: "Logs",
    icon: "nc-icon nc-diamond",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/signout",
    name: "Signout",
    icon: "nc-icon nc-pin-3",
    component: Dashboard,
    layout: "/admin",
  }
];
export default routes;
