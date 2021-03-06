import React from 'react';
import './Header.css';
import logo from '../../logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
import useFirebase from '../../hooks/useFirebase';



const Header = () => {

    const {user,logout}=useFirebase();

    
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


                <p style={{color:'wheat',margin:'5px',padding:'6px'}}>{user.displayName}</p>
                {user.email ?

                    <Button onClick={logout} className="btn btn-danger">Logout</Button> :
                    
                    <NavLink  to="/login">
                    <Button className="btn btn-danger">Login</Button>
                    </NavLink>
                
                }

                </Nav>
                </Container>
            </Navbar>

        </header>
    );
};

export default Header;