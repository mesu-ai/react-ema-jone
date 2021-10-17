import React from 'react';
import './Header.css';
import logo from '../../logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



const Header = () => {
    
    return (
        <header >
            {/* brand logo */}
            <section className="p-3 bg-white">
                <img src={logo} alt="" height="70" width="" />
            </section>

            {/* navigation menu bar */}
            <Navbar bg="black"  variant="black" sticky="top" >
                <Container>
                <Nav  className="me-auto">
                <NavLink activeClassName="bg-success" to="/home">Home</NavLink>
                <NavLink activeClassName="bg-success" to="/shop">Shop</NavLink>
                <NavLink activeClassName="bg-success" to="/inventory">Inventory</NavLink>
                <NavLink activeClassName="bg-success" to="/order">Order Review</NavLink>

                <NavLink className="" activeClassName="bg-success" to="/login">Login</NavLink>
                </Nav>
                </Container>
            </Navbar>

        </header>
    );
};

export default Header;