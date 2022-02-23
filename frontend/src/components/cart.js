import React from 'react';
import { Card, Button, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';
import { incrementProd, decrementProd, removeNumProd } from '../features/cart/prodSlice';
import { increment, decrement } from '../features/cart/counterSlice';
import { decrementCart } from '../features/cart/cartSlice';

import { CountText }  from './count_text';
import cartImage from '../images/cart_300.png';

export default function Cart() {
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
                        <Card className='cart-card'>
                            <Row xs={1} md={4}>
                                <Col style={{display: 'flex'}}>
                                    <a href={hrefpath}>
                                        <Card.Img
                                            src={product.image_desc}
                                            style={{
                                                width: '8rem',
                                                height: '8rem',
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
                                            {CountText(product.title, 25)}
                                        </OverlayTrigger>
                                    </a>
                                    </div>
                                        <div><h2>{product.price} lei</h2></div>
                                    </div>
                                </Col>
                                <Col style={{display: 'flex'}}>
                            
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
                                </Col>
                            </Row>
                        </Card>
                    )}
                    )
            }
            </React.Fragment>
        )
    }
}