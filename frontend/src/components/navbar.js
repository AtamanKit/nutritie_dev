import { 
        Nav, 
        Navbar, 
        NavDropdown, 
        Container, 
        Form, 
        FormControl,
        Button,
    } from 'react-bootstrap';
import { useState } from 'react';
import logo from '../images/logo.png';
import { ImCart } from 'react-icons/im';
import { BsSearch } from 'react-icons/bs';

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
                        <Nav.Link onClick={props.navRem}>Articole</Nav.Link>
                        {/* <Nav.Link onClick={props.navCat}>Produse pe catecorii</Nav.Link> */}
                        {/* <Nav.Link href='#link2'>Magazin</Nav.Link> */}
                        <NavDropdown 
                            title='Magazin' 
                            id='basic-nav-dropdown'
                            menuVariant='dark'
                            onClick={props.navCat}
                        >
                             <NavDropdown.Item 
                                // onMouseEnter={props.navCat} 
                                className='nav-drop-sub'
                             > 
                                Produse pe catecorii
                            </NavDropdown.Item>
                            <NavDropdown.Item href='/breadcrumb/PRODUSE/TOATE PRODUSELE/' className='nav-drop-sub'>
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
                    <div className='search-box'>
                        <Form className='d-flex'>
                            <FormControl
                                type='select'
                                placeholder='Cautati'
                                className='me-2'
                                style={{width: '10rem'}}
                                // aria-label='Search'
                            />
                            <Form.Select style={{
                                            width: '7rem', 
                                            fontSize: '0.8rem',
                                            marginRight: '0.5rem',
                                            }}
                            >
                                <option style={{fontSize: '0.8rem'}}>PRODUSE</option>
                                <option style={{fontSize: '0.8rem'}}>ARTICOLE</option>
                            </Form.Select>
                            <Button 
                                variant='outline-success' 
                                className='btn-search'
                                // href='/breadcrumbs/TITLURILE/CAUTATI/'
                            >
                                <BsSearch />
                            </Button>
                        </Form>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar