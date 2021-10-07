import React from 'react';
import './Header.css';
import logo from '../../logo.png';
import { Container, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const cartelement = <FontAwesomeIcon icon={faShoppingCart} />

const Header = () => {
    
    return (
        <header>
            {/* brand logo */}
            <section className="p-3 bg-white">
                <img src={logo} alt="" height="70" width="" />
            </section>

            {/* navigation menu bar */}
            
            <Navbar bg="black" variant="black" sticky="top">
                <Container>
                <Nav className="me-auto">
                <NavLink activeClassName="bg-success" to="/home">Home</NavLink>
                <NavLink activeClassName="bg-success" to="/shop">Shop</NavLink>
                <NavLink activeClassName="bg-success" to="/inventory">Inventory</NavLink>
                </Nav>
                </Container>
            </Navbar>

            {/* search bar */}
            <section style={{backgroundColor:'#222'}} className="p-4">
            <InputGroup className="w-50 mx-auto">
                <FormControl
                    placeholder="Search Products"
                    aria-label="search-procucts"
                    aria-describedby="basic-addon2"
                    />
                    <Button className="btn btn-primary px-5" id="button-addon2">
                    Search
                   </Button>
                   <Link to="/cart">{cartelement} A</Link>
                   
            </InputGroup>

            </section>




            
        </header>
    );
};

export default Header;