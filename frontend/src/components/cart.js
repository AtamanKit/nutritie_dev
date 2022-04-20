import React from 'react';
import { Card, Button, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';
import { incrementProd, decrementProd, removeNumProd, decrementProdAll } from '../features/cart/prodSlice';
import { increment, decrement, decrementAll } from '../features/cart/counterSlice';
import { decrementCart, emptyCart } from '../features/cart/cartSlice';

import cartImage from '../images/cart_300.png';

export default function Cart() {
    const dispatch = useDispatch();
    const inCart = useSelector((state) => state.cart.items);
    const count = useSelector((state) => state.prodCart.items);
    
    let total = 0;
    let delivery = 50;

    function getNum(id) {
        const item = count.find(item => item.id === id)
        if (item) {
            return item.value
        } else {
            return 1
        }
    }

    if (inCart.length === 0) {
        return (
            <React.Fragment>
                <div className='text-center' style={{margin: '5rem 0 5rem 0'}}>
                        <Card.Img
                            src={cartImage}
                            style={{
                                width: '300px',
                                border: 'none',
                            }}
                        />
                        <Card.Body>
                            <Card.Title style={{color: 'rgb(184, 103, 103)'}}>COSUL ESTE GOL</Card.Title>
                            <Card.Text>Pentru a depune in cos apasati butonul "In cos" in dreptul fiecarui produs</Card.Text>
                        </Card.Body>
                </div>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <Row xs={1} md={2} className='row-cart'>
                    <Col style={{width: '70%'}}>
                        {
                            inCart.map((product) => {
                                total += product.price * getNum(product.id);
                                const hrefpath = `/breadcrumb/PRODUS/${product.category.title}/${product.id}`
                                return(
                                    <Card className='cart-card'>
                                        <Row xs={1} md={3}>
                                            <Col className='cart-img-title'>
                                                <a href={hrefpath}>
                                                    <Card.Img
                                                        src={product.image_desc}
                                                        style={{
                                                            width: '10rem',
                                                            height: '10rem',
                                                        }}
                                                    />
                                                </a>
                                                <div style={{margin: '1rem 0 0 1rem'}}>
                                                    <div>
                                                        <a href={hrefpath}>
                                                            <OverlayTrigger
                                                                key='top'
                                                                placement='top'
                                                                overlay={
                                                                    <Tooltip
                                                                        id={'tooltip-top'}
                                                                    >
                                                                        {product.title}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                {/* {CountText(product.title, 25)} */}
                                                                <h5>{ product.title }</h5>
                                                            </OverlayTrigger>
                                                        </a>
                                                    </div>
                                                    <div><p style={{color: 'rgb(0, 130, 255)', fontSize: '14px'}}>ID PRODUS: { product.id }</p></div>
                                                    <div>
                                                        <h5>{ product.price * getNum(product.id) } lei</h5>
                                                    </div>
                                                    <div style={{display: 'flex'}}>
                                                        <Button 
                                                        variant='success' 
                                                        className='cart-btn-min'
                                                        onClick={() => {
                                                            if (getNum(product.id) !==0) {
                                                                dispatch(decrement(1));
                                                            }
                                                            dispatch(decrementProd(product.id));
                                                        }}
                                                        >
                                                            -
                                                        </Button>
                                                    
                                                        <div className='cart-counter-text'>
                                                            { getNum(product.id) }
                                                        </div>
                                                
                                                        <Button 
                                                            variant='success' 
                                                            className='cart-btn'
                                                            onClick={() => {
                                                                dispatch(increment())
                                                                dispatch(incrementProd(product.id))
                                                            }}
                                                        >
                                                            +
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col>
                                                <Button 
                                                    variant='success' 
                                                    className='myBtnExcl'
                                                    onClick={() => {
                                                        dispatch(decrement(getNum(product.id)));
                                                        dispatch(decrementCart(product.id));
                                                        dispatch(removeNumProd(product.id));
                                                    }}
                                                >
                                                    Excludeti
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card>
                                )}
                            )
                        }
                    </Col>
                    <Col className='total-cos'>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    TOTAL IN COS
                                </Card.Title>
                                <Card.Text>
                                    Pret producte: { total } lei
                                </Card.Text>
                                <Card.Text>
                                    Pret livrare: { delivery } lei
                                </Card.Text>
                                <div style={{borderBottom: '2px solid', marginBottom: '1rem'}} />
                                <Card.Text style={{
                                        color: 'rgb(200, 41, 41)'  
                                    }}
                                >
                                    PRETUL TOTAL: { total + delivery } lei
                                </Card.Text>
                                <Button 
                                    variant='success' 
                                    className='offcanvas-btn-sec'
                                    // onClick={
                                    //             props.navCartOffcanvas
                                    //         }
                                    onClick={() => {
                                        dispatch(emptyCart());
                                        dispatch(decrementAll());
                                        dispatch(decrementProdAll())
                                    }}
                                >
                                    Goliti cos
                                </Button>
                                <Button 
                                    variant='success'
                                    className='offcanvas-btn'
                                    onClick={() => window.location.pathname=`/breadcrumb/COMANDA/VINZARI/${total}/${delivery}/`}
                                >
                                    Continuati
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}