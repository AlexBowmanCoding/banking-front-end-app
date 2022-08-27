import { useState } from 'react';
import {  Navbar,  NavbarBrand, Collapse, NavbarToggler, Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import LoginModal from './LoginModal';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
         {/* <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
            <title>Bank Inc.</title>

        </head> */}
        <Navbar dark className="navbar" sticky='top' expand='md'>
            <NavbarBrand href='/'>
                <h4>BankInc</h4>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>   
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <LoginModal className="ml-5"/>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className="nav-route"/> Home
                        </NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className="nav-route"/> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i className="nav-route"/> Contact Us
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        
        
    </>
    )
}
export default Header;

