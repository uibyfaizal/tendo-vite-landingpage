import Logo from '../assets/img/logo-tendo.png'

import { useState } from 'react';

import {Navbar, Container, Nav, NavDropdown, Modal} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {navLinks} from '../data/index';

const NavbarComponents = () => {
//     const [changeColor, setChangeColor] = useState(false);

//   const changeBackgroundColor = () => {
//     if(window.scrollY > 10) {
//       setChangeColor(true);
//     } else {
//       setChangeColor(false);
//     }
//   };

//   useEffect(() => {
//     changeBackgroundColor();

//     window.addEventListener('scroll', changeBackgroundColor);
//   })


const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                            <NavLink href={link.path} className='text-decoration-none' onClick={handleShow}>{link.text}</NavLink>
                        </div>
                    })}
                </Nav>

                <div className='bag-icon'>
                    <a href="/"><i className="fa-solid fa-bag-shopping"></i></a>
                </div>
                </Navbar.Collapse>
            </Container>
    </Navbar>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className='text-center'>
            <h1 className='text-secondary'><i className="fa-regular fa-face-frown-open"></i></h1>
            <p className='text-secondary'>Yahhhh.. Fitur ini masih belum tersedia nih. Tunggu Developernya gak mager buat update yaa..</p>
        </Modal.Body>
        
      </Modal>
    </div>
    )
}

export default NavbarComponents;