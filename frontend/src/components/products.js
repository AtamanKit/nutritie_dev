import { 
    Tooltip, 
    OverlayTrigger, 
    Card, 
    Button, 
    Row, 
    Col,
    Offcanvas,
    Spinner,
} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { ImCart } from 'react-icons/im';
import { CountText }  from './count_text';
import { spacePath, elementPath, apiUrl } from './utils';

import { useDispatch, useSelector } from 'react-redux';
import { incrementFunc } from '../features/cart/incrementFunc';
import CartOffcanvas from './cart_offcanvas';
// import { emptyCart } from '../features/cart/cartSlice';

const pathname = elementPath()

// console.log(api_url)

function Products(props) {
    // const emptyCart = () => {
    //     console.log('tata')
    // }

    const [products, setProducts] = useState([]);

    const inCart = useSelector((state) => state.cart.items)
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const url = apiUrl() + '/nut_app/products/'

        const fetchData = async() => {
            try {
                const result = await fetch(url);
                const json = await result.json();
                setProducts(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [])

    function finalReturn(product) {
        const hrefpath = `/breadcrumb/PRODUS/${product.category.title}/${product.id}`
        return(
            <React.Fragment>
                <Col key={product.id} style={{paddingTop: '2rem'}}>
                    <Card style={{
                                    textAlign: 'center',
                                    border: 'none',
                                    padding: '1rem',
                                    boxShadow: '12px 12px 20px 3px rgba(0, 0, 0, .1)',
                            }}
                    >
                        <a href={hrefpath}>
                            <Card.Img 
                                variant='top'
                                src={product.image_desc}
                            />
                        </a>
                        <Card.Body>
                            <OverlayTrigger
                                key='top'
                                placement='top'
                                overlay={
                                    <Tooltip 
                                        id={`tooltip-top`} 
                                    >
                                        {product.title}
                                    </Tooltip>
                                }
                            >
                            <Card.Title>
                                <a 
                                    href={hrefpath}
                                    style={{
                                        color: 'rgb(30, 30, 30)',
                                        textDecorationLine: 'none',
                                    }}
                                >
                                        {CountText(product.title, 25)}
                                </a>
                            </Card.Title>
                            </OverlayTrigger>
                            <Card.Text style={{color: 'rgb(0, 130, 255)', fontSize: '15px'}}>ID PRODUS: {product.id}</Card.Text>
                            <Card.Text style={{color: 'rgb(200, 41, 41)'}}>{product.stock}</Card.Text>
                            <Card.Title><h1>{product.price} lei</h1></Card.Title>
                            <Button 
                                variant='success' 
                                className='myBtn'
                                href={hrefpath}
                            >
                                Detalii...
                            </Button>
                            
                            <Button 
                                variant='success' 
                                className='myBtnBord'
                                onClick={() => {
                                    incrementFunc(product, inCart, dispatch);
                                    handleShow()
                                }}
                            >
                                In cos <ImCart/>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                
            </React.Fragment>
               
        )
    }

    function prodReturn(product) {
        return(
            <React.Fragment>
                {
                    window.location.pathname === '/breadcrumb/PRODUSE/TOATE%20PRODUSELE/'
                    ?   finalReturn(product)
                    :   product.category.title === pathname.category
                    ?   finalReturn(product)
                    :   product.brand.title === spacePath(pathname.category)
                    ?   finalReturn(product)
                    :   []
                }
            </React.Fragment>
        )
    }
    
    return (
        <React.Fragment>
            {
                products.length === 0
                ?   <div class="spinner">
                        <Spinner
                            animation="border"
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                :   []
            }
            <Row xs={1} md={5}>
                {
                    products.map(product => 
                        prodReturn(product)
                    )
                }
                
            </Row>
            <Offcanvas 
                show={show} 
                onHide={handleClose}
                placement='end'
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>PRODUSE IN COS</Offcanvas.Title>
                </Offcanvas.Header>
                
                <Offcanvas.Body>
                    <CartOffcanvas  
                        // navCartOffcanvas={props.navCartProd}
                        // emptyCart={emptyCart}
                    />                                
                </Offcanvas.Body>
            </Offcanvas>
        </React.Fragment>
    )
}

export default Products