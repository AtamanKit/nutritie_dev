import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { useState } from 'react';
import logo from '../images/logo.png';
import { ImCart } from 'react-icons/im';

function NavBar(props) {
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
                <Navbar.Brand href='/'>
                    <img
                        src={logo}
                        height='50'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav' className='nav-toggle'>
                    <Nav className='me-auto'>
                        <Nav.Link href='/' onClick={props.navHome}>Home</Nav.Link>
                        <Nav.Link onClick={props.navRem}>Remedii</Nav.Link>
                        {/* <Nav.Link onClick={props.navCat}>Produse pe catecorii</Nav.Link> */}
                        {/* <Nav.Link href='#link2'>Magazin</Nav.Link> */}
                        <NavDropdown title='Magazin' id='basic-nav-dropdown' menuVariant='dark'>
                             <NavDropdown.Item onMouseEnter={props.navCat} className='nav-drop-sub'> 
                                Produse pe catecorii
                            </NavDropdown.Item>
                            <NavDropdown.Item href='/toata_prod' className='nav-drop-sub'>
                                Toate produsele
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={props.navBrand}>Branduri</Nav.Link>
                        <Nav.Link onClick={props.navFoot}>Contacte</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='nav_left'>Cos <ImCart/></Nav.Link>
                        <Nav.Link className='nav_left'>Sign In</Nav.Link>
                        <Nav.Link>Log In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar