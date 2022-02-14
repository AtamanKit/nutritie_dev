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
    const [color, setColor] = useState('');

    const [searchselect, setSearchselect] = useState('PRODUSE');
    const [searchinput, setSearchinput] = useState('')
    
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
                        <Nav.Link className='nav_left'>
                            {/* <div style={{display: 'block'}}> */}
                            <div
                                style={{
                                    position: 'relative',
                                    backgroundColor: 'red',
                                    width: 16,
                                    height: 16,
                                    borderRadius: 15/2,
                                    left: 50,
                                    // top: 0,
                                    alignItems: 'center',
                                    // marginLeft: '2.5rem',
                                    // marginBottom: '10.5rem',
                                    // justigyContent: 'center',
                                }}
                            />
                            Cos <ImCart/>
                            {/* </div> */}
                        </Nav.Link>
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
                                onChange={e => setSearchinput(e.target.value)}
                            />
                            <Form.Select style={{
                                            width: '7rem', 
                                            fontSize: '0.8rem',
                                            marginRight: '0.5rem',
                                            }}
                                            onChange={e => {setSearchselect(e.target.value)}}
                            >
                                <option style={{fontSize: '0.8rem'}} value='PRODUSE'>PRODUSE</option>
                                <option style={{fontSize: '0.8rem'}} value='ARTICOLE'>ARTICOLE</option>
                            </Form.Select>
                            <Button 
                                variant='outline-success' 
                                className='btn-search'
                                href={`/breadcrumb/${searchselect}/CAUTATI/${searchinput}`}
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