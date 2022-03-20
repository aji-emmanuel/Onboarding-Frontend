import { useLocation, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const SideBar = ({routes, show}) => {

    const location = useLocation();
    const activeRoute = (routeName) => {
        return location.pathname.indexOf(routeName) > -1 ? "active" : "";
    };

     let classes = "sidebar"
    if(show){
        classes = "sidebar open"
    }

    return (
        <div className={classes}>
            <div className="sidebar-wrapper">
                <Nav>
                {routes.map((prop, key) => {
                    if (!prop.redirect)
                    return (
                        <li className={ activeRoute(prop.layout + prop.path) } key={key}>
                            <NavLink
                                to={prop.layout + prop.path}
                                className="nav-link"
                                activeClassName="active"
                            >
                                <i className={prop.icon} />
                                <p>{prop.name}</p>
                            </NavLink>
                        </li>
                    );
                    return null;
                })}
                </Nav>
            </div>
        </div>
    );
};

export default SideBar
