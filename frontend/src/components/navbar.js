import { Nav, Navbar, NavDropdown, Container, Button } from 'react-bootstrap';
import { useState } from 'react';
import logo from '../images/logo.png';
import { ImCart } from 'react-icons/im';

function NavBar() {
    const [color, setColor] = useState('')
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80){
            setColor('dark')
        } else {
            setColor('')
        }
    })
    
    return(
        <Navbar 
            bg={color} 
            fixed='top' 
            variant='dark' 
            expand='lg'
            className='navbar'
        >
            <Container>
                <Navbar.Brand href='#home'>
                    <img
                        src={logo}
                        height='50'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#link'>Remedii</Nav.Link>
                        <Nav.Link href='#link2'>Magazin</Nav.Link>
                        <Nav.Link href='#link3'>Contacte</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link className='nav_left'><ImCart/></Nav.Link>
                        <Nav.Link className='nav_left'>Sign In</Nav.Link>
                        <Nav.Link>Log In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar