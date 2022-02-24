import React from 'react';
import { Card, Button, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';
import { incrementProd, decrementProd, removeNumProd } from '../features/cart/prodSlice';
import { increment, decrement } from '../features/cart/counterSlice';
import { decrementCart } from '../features/cart/cartSlice';

import { CountText }  from './count_text';
import cartImage from '../images/cart_300.png';

export default function CartOffcanvas() {
    const dispatch = useDispatch();
    const inCart = useSelector((state) => state.cart.items)
    const count = useSelector((state) => state.prodCart.items);

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
                    {/* </Card> */}
                </div>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
            {
                inCart.map(product => {
                    const hrefpath = `/breadcrumb/PRODUS/${product.category.title}/${product.id}`
                    return(
                        <Card className='cart-card-offcanvas'>
                            <Row xs={1} md={1}>
                                <Col style={{display: 'flex'}}>
                                    <a href={hrefpath}>
                                        <Card.Img
                                            src={product.image_desc}
                                            style={{
                                                width: '5rem',
                                                height: '5rem',
                                            }}
                                        />
                                    </a>
                                    
                                        
                                    <div>
                                        <div>
                                            <a href={hrefpath}>
                                                <h6>{product.title}</h6>
                                            </a>
                                        </div>
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
                                            <div>
                                                { product.price * getNum(product.id) } lei
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                {/* <Col style={{display: 'flex'}}>
                            
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
                                </Col>
                                <Col>
                                    <div className='cart-text'>
                                        { product.price * getNum(product.id) } lei
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
                                </Col> */}
                            </Row>
                        </Card>
                    )}
                    )
            }
            </React.Fragment>
        )
    }
}