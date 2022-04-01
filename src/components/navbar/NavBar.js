
import React from "react";
//import './navbar-style.css';
import { connect } from "react-redux";
import { logoutUser } from "../../appStore/actions/AuthAction";
import { Navbar, Nav, Dropdown, Button } from "react-bootstrap";

const LayoutNavbar = ({onClick, logoutUser}) => {

  var loggedEmployee = JSON.parse(localStorage.getItem('loggedEmployee'));
  var path;
  let role = localStorage.getItem('role');
  if (role === 'Hr'){
      path = "/hr/profile";
  } else if (role === 'Employee') {
      path = "/employee/profile";
  }

  return (
    <Navbar expand="sm">
      <div>
        <Button
          className="d-lg-none"
          onClick={onClick}
        >
          <i className="fas fa-ellipsis-v"></i>
        </Button>
        <Navbar.Brand
          className="mr-2"
        >
          Team-Lion
        </Navbar.Brand>
      </div>
      <div id="spacer" />
      <div>
        <Navbar.Toggle id="nav-button">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse >
          <Nav>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                as={Nav.Link}
                data-toggle="dropdown"
                id="dropdown-67443507"
                variant="default"
                className="m-0"
              >
                <span className="notification">1</span>
                <span className=" ml-1">
                  <i className="fa fa-bell" aria-hidden="true"></i>
                  Notification
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  href="#!"
                  onClick={(e) => e.preventDefault()}
                >
                  Welcome {loggedEmployee?.firstName}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
           
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                aria-expanded={false}
                aria-haspopup={true}
                as={Nav.Link}
                data-toggle="dropdown"
                id="navbarDropdownMenuLink"
                variant="default"
                className="m-0"
              >
                <span>
                  <i className="fa fa-user" aria-hidden="true"></i>
                   {loggedEmployee?.firstName}
                  </span>
              </Dropdown.Toggle>
              <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
                <Dropdown.Item
                  href={path}
                >
                  <i className="fa fa-user" aria-hidden="true"></i>
                    My profile
                </Dropdown.Item>
               
                <div className="divider"></div>
                <Dropdown.Item
                  href="#!"
                  onClick={() => logoutUser()}
                >
                   <i className='fal fa-sign-out-alt'></i>
                      Sign Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
       <p className="small-logout" onClick={()=> logoutUser()}>logout</p>
    </Navbar>
  );
};

export default connect(null, {logoutUser}) (LayoutNavbar);
