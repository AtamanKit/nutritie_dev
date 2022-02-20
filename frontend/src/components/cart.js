import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { incrementProd, decrementProd } from '../features/counter/prodSlice';

export default function Cart() {
    const inCart_split = useSelector((state) => state.cart.value)
                    .slice(0, -3)
                    .split('%20')

    const inCart = []
    let i = 0
    if (inCart_split[0] !== '') {
        inCart_split.map(item => {
            inCart.push(JSON.parse(item))
        })
    }

    const dispatch = useDispatch();
    const count = useSelector((state) => state.prodCart.items);

    const getNum = id => {
        const item = count.find(item => item.id === id)

        return item.value
    }

    console.log(count)

    return (
        <React.Fragment>
           {
               inCart.map(product =>
                // <div >
                <Card className='cart-card'>
                    <Row xs={1} md={4}>
                        <Col style={{display: 'flex'}}>
                            <Card.Img
                                src={product.image_desc}
                                style={{
                                    width: '8rem',
                                    height: '8rem',
                                }}
                            />
                            <div style={{marginRight: '1rem'}}>
                                <div>{product.title}</div>
                                <div><h2>{product.price} lei</h2></div>
                            </div>
                        </Col>
                        <Col style={{display: 'flex'}}>
                       
                            <Button 
                                variant='success' 
                                className='cart-btn'
                                onClick={() => {
                                    dispatch(decrementProd())
                                }}
                            >
                                -
                            </Button>
                        
                            <div className='cart-counter-text'>
                                {
                                    count.length === 0
                                    ? 1
                                    : getNum(product.id)
                                }
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
                                23 lei
                            </div>
                        </Col>
                        <Col>
                            <Button variant='success' className='myBtnExcl'>Excludeti</Button>
                        </Col>
                    </Row>
                </Card>
                )
           }
        </React.Fragment>
    )
}