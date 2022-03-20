
import Dashboard from "../../pages/hrpage/Dashboard";
import Calendar from "../../pages/hrpage/Calendar";
import Employees from "../../pages/hrpage/Employees";
import Anouncements from "../../pages/hrpage/Anouncements";
import Messages from "../../pages/hrpage/Messages";
import Reports from "../../pages/hrpage/Reports";
import Profile from "../../pages/hrpage/Profile";



const HrRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fa fa-home",
    component: Dashboard,
    layout: "/hr",
  },
  {
    path: "/employees",
    name: "Employees",
    icon: "fa fa-users",
    component: Employees,
    layout: "/hr",
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "fa fa-calendar-alt",
    component: Calendar,
    layout: "/hr",
  },
  {
    path: "/profile",
    name: "My Profile",
    icon: "fa fa-user",
    component: Profile,
    layout: "/hr",
  },
  {
    path: "/messages",
    name: "Messages",
    icon: "fa fa-envelope",
    component: Messages,
    layout: "/hr",
  },
  {
    path: "/anouncements",
    name: "Anouncements",
    icon: "fa fa-bullhorn",
    component: Anouncements,
    layout: "/hr",
  },
  {
    path: "/reports",
    name: "Reports",
    icon: "fa fa-chart-pie",
    component: Reports,
    layout: "/hr",
  }
];

export default HrRoutes;