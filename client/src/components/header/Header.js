import React from "react";
import "./Header.scss";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export default class Header extends React.Component {
    render() {
        return (
            <Navbar bg="white" className="shadow-sm">
                <LinkContainer to="/">
                    <Navbar.Brand className="ms-2 px-1">StudyBuddies</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/classes">
                            <Nav.Link>Classes</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <NavDropdown className="me-2" align="end" title={<img alt="" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" className="rounded-circle my-auto" width="32" height="32"></img>}>
                        <LinkContainer to="/settings">
                            <NavDropdown.Item>Settings</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}