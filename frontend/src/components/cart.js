import React from 'react';
import { Card, Button, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { incrementProd, decrementProd } from '../features/counter/prodSlice';
import { decrement } from '../features/counter/counterSlice';
import { decrementCart } from '../features/cart/cartSlice';
import { CountText }  from './count_text';

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
                                        dispatch(decrementProd(product.id))
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
                                        dispatch(decrement());
                                        dispatch(decrementCart(product))
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