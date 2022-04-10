import { 
        Nav, 
        Navbar, 
        NavDropdown, 
        Container, 
        Form, 
        FormControl,
        Button,
        Modal,
        Image,
    } from 'react-bootstrap';
import React, { useState } from 'react';
import logo from '../images/logo.png';
import { ImCart } from 'react-icons/im';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../features/auth/userSlice';
import LoginGoogle from './login_google';
import LoginFacebook from './login_facebook';
import LoginEmail from './login_email';
import SignIn from './sign_in';
import user_image from '../images/user_icon.png';

function NavBar(props) {
    const [color, setColor] = useState('');

    const [searchselect, setSearchselect] = useState('PRODUSE');
    const [searchinput, setSearchinput] = useState('');
    const [passResetCheck, setPassResetCheck] = useState(false)

    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value);
    const user = useSelector((state) => state.user.item);

    const [show, setShow] = useState(false);
    const handleClose = () => {
            setShow(false);
            setPassResetCheck(false);
    }

    const [login, setLogin] = useState(false);
    const handleLoginShow = () => {
        setShow(true);
        setLogin(true);
    }
    const handleSigninShow = () => {
        setShow(true);
        setLogin(false);
    }

    const handlePassReset = result => {
        setPassResetCheck(result)
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 80){
            setColor('dark')
        } else {
            setColor('')
        }
    })

    const removeUserFunc = () => {
        dispatch(removeUser());
    }

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
                                            : <div style={{marginBottom: '1.05rem'}}/>
                                        }
                                    </div>
                                </div>
                            </Nav.Link>
                            <div className='vertical-line'/>
                            {   
                                user === ""
                                ?   <React.Fragment>
                                        <Nav.Link 
                                            className='nav_left_sign'
                                            onClick={handleSigninShow}
                                        >   
                                           Sign In
                                        </Nav.Link>
                                        <div className='vertical-line'/>
                                        <Nav.Link 
                                            className='nav_left_login'
                                            onClick={handleLoginShow}
                                        >
                                            Log In
                                        </Nav.Link>
                                    </React.Fragment>
                                :   <React.Fragment>
                                        <div className='after-login'>
                                            {   
                                                user.image_url !== "user_image"
                                                ?   <Image 
                                                        src={user.image_url}
                                                        roundedCircle={true}
                                                        className='after-login-img'
                                                    />
                                                :   <Image 
                                                        src={user_image}
                                                        roundedCircle={true}
                                                        className='after-login-img'
                                                    />
                                                       
                                            }
                                            <NavDropdown
                                                title={user.first_name}
                                                menuVariant='dark'
                                            >
                                                <NavDropdown.Item
                                                    onClick={removeUserFunc}
                                                >
                                                    Log Out
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        </div>
                                    </React.Fragment>
                            }
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

            {/* Three states of Modal
                1) When Login ('login' = true)
                2) When Signin ('login' = false)
                3) When forgeting the password 'passResetCheck' = true in this case
                login Google and Facebook buttons will not appear
            */}
            <Modal show={show} onHide={handleClose}>
                {
                   !passResetCheck
                   ?    <div>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    Logati-va folosind una din metode
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div style={{textAlign: 'center'}}>
                                    <LoginGoogle/>
                                    <br/>
                                    <LoginFacebook/>
                                </div>
                            </Modal.Body>
                            <div style={{
                                backgroundColor: 'rgb(220, 220, 220)',
                                height: '2px',
                            }}
                            />
                        </div>
                   :    <Modal.Header closeButton>
                            <Modal.Title>
                                Schimbati parola introducind email
                            </Modal.Title>
                        </Modal.Header>
                }
                
                <Modal.Body>
                    {
                        login === true
                        // passForgotFunc is a prop that will control
                        // if user pushed 'I forgot the password' link
                        ?   <LoginEmail passResetFunc={handlePassReset}/>
                        :   <SignIn /> 
                    }
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                    <Button 
                        variant='success' 
                        onClick={handleClose}
                        className='modal_btn'
                    >
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default NavBar