
import Dashboard from "../../pages/employeepage/Dashboard";
import Calendar from "../../pages/employeepage/Calendar";
import Employees from "../../pages/employeepage/Employees";
import Anouncements from "../../pages/employeepage/Anouncements";
import Messages from "../../pages/employeepage/Messages";
import Profile from "../../pages/employeepage/Profile";



const EmployeeRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fa fa-home",
    component: Dashboard,
    layout: "/employee",
  },
  {
    path: "/employees",
    name: "Employees",
    icon: "fa fa-users",
    component: Employees,
    layout: "/employee",
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "fa fa-calendar-alt",
    component: Calendar,
    layout: "/employee",
  },
  {
    path: "/profile",
    name: "My Profile",
    icon: "fa fa-user",
    component: Profile,
    layout: "/employee",
  },
  {
    path: "/messages",
    name: "Messages",
    icon: "fa fa-envelope",
    component: Messages,
    layout: "/employee",
  },
  {
    path: "/anouncements",
    name: "Anouncements",
    icon: "fa fa-bullhorn",
    component: Anouncements,
    layout: "/employee",
  }
];

export default EmployeeRoutes;