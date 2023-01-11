import React from "react";
import "./Header.scss";
import {Navbar, Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export class Header extends React.Component {
    render() {
        return (
            <Navbar>
                <LinkContainer to="/">
                    <Navbar.Brand>StudyBuddies</Navbar.Brand>
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
            </Navbar>
        );
    }
}