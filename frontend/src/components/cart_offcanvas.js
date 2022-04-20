import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';
import { incrementProd, decrementProd, removeNumProd, decrementProdAll } from '../features/cart/prodSlice';
import { increment, decrement, decrementAll } from '../features/cart/counterSlice';
import { decrementCart, emptyCart } from '../features/cart/cartSlice';

import { BsXLg } from 'react-icons/bs';

import { CountText }  from './count_text';
import cartImage from '../images/cart_300.png';
// import { getBsProps } from 'react-bootstrap/lib/utils/bootstrapUtils';

export default function CartOffcanvas(props) {
    const dispatch = useDispatch();
    const inCart = useSelector((state) => state.cart.items)
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
                        {/* <Card.Img
                            src={cartImage}
                            style={{
                                width: '300px',
                                border: 'none',
                            }}
                        />
                        <Card.Body>
                            <Card.Title style={{color: 'rgb(184, 103, 103)'}}>COSUL ESTE GOL</Card.Title>
                            <Card.Text>Pentru a depune in cos apasati butonul "In cos" in dreptul fiecarui produs</Card.Text>
                        </Card.Body> */}
                    {/* </Card> */}
                </div>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
            {
                inCart.map(product => {
                    total += product.price * getNum(product.id);
                    const hrefpath = `/breadcrumb/PRODUS/${product.category.title}/${product.id}`
                    return(
                        <Card className='cart-card-offcanvas'>
                            <Row xs={1} md={2}>
                                <Col style={{
                                        display: 'flex', 
                                        width: '80%', 
                                        margin: '.5rem 0 .1rem 0'
                                        }}
                                >
                                    <a href={hrefpath}>
                                        <Card.Img
                                            src={product.image_desc}
                                            style={{
                                                width: '7rem',
                                                height: '7rem',
                                            }}
                                        />
                                    </a>
                                    
                                        
                                    <div style={{margin: '.5rem 0 0 0'}}>
                                        <div>
                                            <a href={hrefpath}>
                                                <h6>{product.title}</h6>
                                            </a>
                                        </div>
                                        <p style={{color: 'rgb(0, 130, 255)', fontSize: '12px'}}>ID PRODUS: {product.id}</p>
                                        <div style={{display: 'flex'}}>
                                            <div style={{display: 'flex'}}>
                                                <Button 
                                                    variant='success' 
                                                    className='cart-btn-min-offcanvas'
                                                    onClick={() => {
                                                        if (getNum(product.id) !==0) {
                                                            dispatch(decrement(1));
                                                        }
                                                        dispatch(decrementProd(product.id));
                                                    }}
                                                >
                                                    -
                                                </Button>                           
                                
                                                <div className='cart-counter-text-offcanvas'>
                                                    { getNum(product.id) }
                                                </div>

                                                <Button 
                                                    variant='success' 
                                                    className='cart-btn-offcanvas'
                                                    onClick={() => {
                                                        dispatch(increment())
                                                        dispatch(incrementProd(product.id))
                                                    }}
                                                >
                                                    +
                                                </Button>
                                            </div>
                                            {/* <div style={{margin: '0 .2rem 0 1rem'}}>x</div> */}
                                            <div>
                                                { product.price * getNum(product.id) } lei
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col style={{width: '10%'}}>
                                    <a href='#'>
                                        <BsXLg 
                                            onClick={() => {
                                                dispatch(decrement(getNum(product.id)));
                                                dispatch(decrementCart(product.id));
                                                dispatch(removeNumProd(product.id));
                                            }
                                            }
                                        />
                                    </a>
                                </Col>
                            </Row>
                        </Card>
                    )}
                    )
            }
                <Button 
                    variant='success' 
                    className='offcanvas-btn-sec'
                    // onClick={
                    //             props.navCartOffcanvas
                    //         }
                    onClick={() => {
                        dispatch(emptyCart());
                        dispatch(decrementAll());
                        dispatch(decrementProdAll());
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
            </React.Fragment>
        )
    }
}