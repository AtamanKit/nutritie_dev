import { Tooltip, OverlayTrigger, Card, Button, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { ImCart } from 'react-icons/im';
import { CountText }  from './count_text';
import { spacePath, elementPath } from './utils';

import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../features/counter/counterSlice'; //increments numbers on the cart icon in the navbar
import { incrementCart } from '../features/cart/cartSlice'; //adds products to the cart
import { incrementProd } from '../features/counter/prodSlice'; //increment counter of product in cart

const pathname = elementPath()

function Products() {
    const [products, setProducts] = useState([]);
    // const [check, setCheck] = useState(false);

    const inCart = useSelector((state) => state.cart.items)
    const dispatch = useDispatch();

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/nut_app/products/'

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

    function incrementFunc(product) {
        let check = true;

        if (inCart.length !== 0) {
            inCart.map(item => {
                if (item.id !== product.id) {
                    check = false
                } else {
                    check = true
                }
            })
        } else {
            dispatch(increment());
            dispatch(incrementCart(product))
        }

        if (!check) {
            dispatch(increment());
            dispatch(incrementCart(product));
        } else if (check && inCart.length !== 0) {
            dispatch(incrementProd(product.id))
        }
    }

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
                                    // dispatch(increment());
                                    // dispatch(incrementCart(product));
                                    incrementFunc(product)
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
            <Row xs={1} md={5}>
                {
                    products.map(product => 
                        prodReturn(product)
                    )
                }
                
            </Row>
        </React.Fragment>
    )
}

export default Products