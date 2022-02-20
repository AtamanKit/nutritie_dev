import { Tooltip, OverlayTrigger, Card, Button, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { ImCart } from 'react-icons/im';
import { CountText }  from './count_text';
import { spacePath, elementPath } from './utils';
import { useDispatch } from 'react-redux';
import { increment } from '../features/counter/counterSlice';
import { incrementCart } from '../features/cart/cartSlice';

const pathname = elementPath()

function Products() {
    const [products, setProducts] = useState([]);

    // const inCart = useSelector((state) => state.cart.value)
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

    // console.log(inCart.slice(0, -3))

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
                                    dispatch(increment());
                                    dispatch(incrementCart(
                                                `{"id":"${product.id}",` +
                                                `"title":"${product.title}",` +
                                                `"price":"${product.price}",` +
                                                `"image_desc":"${product.image_desc}"}`
                                        )
                                    );
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