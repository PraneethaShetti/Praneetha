import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './css/navHeader.css'

class NavHeader extends Component {
    render() {
        return (
            <div className="customNav fixedTop">
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link href="/Praneetha" to="/Praneetha">Praneetha Shetti</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} componentClass={Link} href="/Praneetha" to="/Praneetha">
                                    Home
                            </NavItem>
                            <NavItem eventKey={2} componentClass={Link} href="/Praneetha/about" to="/Praneetha/about">
                                    About
                            </NavItem>
                            <NavItem eventKey={3} componentClass={Link} href="/Praneetha/resume" className="resumeSlot" to="/Praneetha/resume">
                                    Resume
                            </NavItem>
                            <NavItem eventKey={4} componentClass={Link} href="/Praneetha/workDone" to="/Praneetha/workDone">
                                    Work Done
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavHeader;
