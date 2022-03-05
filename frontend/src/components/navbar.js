import { 
        Nav, 
        Navbar, 
        NavDropdown, 
        Container, 
        Form, 
        FormControl,
        Button,
        Modal,
    } from 'react-bootstrap';
import React, { useState } from 'react';
import logo from '../images/logo.png';
import { ImCart } from 'react-icons/im';
import { BsSearch } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import LoginGoogle from './login_google';
import LoginFacebook from './login_facebook';

function NavBar(props) {
    const [color, setColor] = useState('');

    const [searchselect, setSearchselect] = useState('PRODUSE');
    const [searchinput, setSearchinput] = useState('');

    const count = useSelector((state) => state.counter.value);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80){
            setColor('dark')
        } else {
            setColor('')
        }
    })
    return(
        <React.Fragment>
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
                            <Nav.Link className='nav_left' onClick={props.navCart}>
                                <div style={{display: 'flex'}}>
                                    Cos
                                    <div style={{marginLeft: '0.3rem'}}>
                                        <ImCart/>
                                        {
                                            count !== 0
                                            ?   <div
                                                    style={{
                                                        position: 'relative',
                                                        backgroundColor: 'red',
                                                        // width: 16,
                                                        // height: 16,
                                                        borderRadius: 10/2,
                                                        left: 10,
                                                        bottom: 32,
                                                        textAlign: 'center',
                                                        color: 'white',
                                                        fontSize: '0.7rem',
                                                        padding: '0 0.2rem 0 0.2rem'
                                                    }}
                                                >
                                                    {count}
                                                </div>
                                            : <div style={{marginBottom: '1.05rem'}}/>                                    }
                                    </div>
                                </div>
                            </Nav.Link>
                            <div className='vertical-line'/>
                            <Nav.Link 
                                className='nav_left_sign'
                            >
                                SignIn
                            </Nav.Link>
                            <div className='vertical-line'/>
                            <Nav.Link 
                                className='nav_left_login'
                                onClick={handleShow}
                            >
                                LogIn
                            </Nav.Link>
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

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Logati-va folosind una din metode
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Woohoo, you're reading this text in a model! */}
                    <div style={{textAlign: 'center'}}>
                        <LoginGoogle/>
                        <br/>
                        <LoginFacebook/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                    <Button 
                        variant='success' 
                        onClick={handleClose}
                        className='modal_btn'
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default NavBar