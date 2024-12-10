import Logo from '../assets/img/logo-tendo.png'

import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {navLinks} from '../data/index';

const NavbarComponents = () => {

    return (

    <div>
        <Navbar expand="lg"  className='fixed-top'>
            <Container>
                <Navbar.Brand href="/"><img src={Logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                <NavDropdown title="Furniture" id="basic-nav-dropdown" className='mx-3 pt-2 nav-link'>
                    <NavDropdown.Item href="#action/3.1">Chair</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Tables
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Bed</NavDropdown.Item>
                </NavDropdown>
                    {navLinks.map((link) => {
                        return <div className='nav-link mx-3 pt-3' key={link.id}>
                            <NavLink to={link.path} className='text-decoration-none'>{link.text}</NavLink>
                        </div>
                    })}
                </Nav>

                <div className='bag-icon'>
                    <a href="/"><i className="fa-solid fa-bag-shopping"></i></a>
                </div>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    </div>
    )
}

export default NavbarComponents;