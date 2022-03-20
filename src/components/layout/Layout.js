import React, { useRef, useState } from 'react';
import { Switch } from "react-router-dom";
import HrRoutes from '../../utilities/routes/HrRoutes';
import EmployeeRoutes from "../../utilities/routes/EmployeeRoutes";
import EmployeeProfile from '../../pages/hrpage/EmployeeProfile';
import EmployeeProfile2 from '../../pages/employeepage/EmployeeProfile2';
import AddEmployee from '../../pages/hrpage/AddEmployee';
import SideBar from '../sideBar/SideBar';
import Backdrop from '../sideBar/Backdrop';
import NavBar from "../navbar/NavBar";
import RoleBasedRoute from '../../utilities/RoleBasedRoute';

const Layout = () => {
    const mainPanel = useRef(null);
    var routes;
    let roles = localStorage.getItem('role');
    if(roles.includes('HR')){
        routes = HrRoutes;
    } else if(roles.includes('Employee')) {
        routes = EmployeeRoutes;
    } else {
        routes = [];
    };

    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/hr") {
                return (
                    <RoleBasedRoute
                        path={prop.layout + prop.path}
                        component={prop.component}
                        role={"HR"}
                        key={key}
                    />
                );
            } else if (prop.layout === "/employee"){
                return (
                    <RoleBasedRoute
                        path={prop.layout + prop.path}
                        component={prop.component}
                        role={"Employee"}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };
    // State to hold if sidebar is open or not
    const [sideBarOpen, setSideBar] = useState(false);
    // Sets the sidebar to open if closed and closed if open
    const sideBarClickHandler = () =>{
        setSideBar(!sideBarOpen);
    };
 
  return (
    <div className="wrapper">
        <NavBar onClick={sideBarClickHandler} />
        {sideBarOpen && (<Backdrop click={sideBarClickHandler} />)}
        <SideBar routes={routes} show={sideBarOpen} />
        
        <div className="main-panel" ref={mainPanel}>
            <div className="content">
                <Switch>
                    {getRoutes(routes)}
                    <RoleBasedRoute exact path="/hr/employee" component={EmployeeProfile} role={"HR"} />
                    <RoleBasedRoute exact path="/employee/employee" component={EmployeeProfile2} role={"Employee"} />
                    <RoleBasedRoute exact path="/hr/add_employee" component={AddEmployee} role={"HR"} />
                </Switch>
            </div>
        </div>
    </div>
    );
};

export default Layout;
