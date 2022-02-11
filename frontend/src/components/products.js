import { Tooltip, OverlayTrigger, Card, Button, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import BreadProd from './bread_prod';
import { ImCart } from 'react-icons/im';
import { CountText }  from './count_text';


function Products(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // const url = 'http://127.0.0.1:8000/nut_app/productsupls/';
        const url = props.url

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

    return(
        <React.Fragment>
            <BreadProd 
                // upGreen='VEDETI PRODUSELE DIN'
                // downWhite='CATEGORIA: SUPLIMENTE'
                upGreen={props.bread_green}
                downWhite = {props.bread_white}
            />
            <Row xs={1} md={5}>
                {
                    products.map(product =>
                        <Col key={product.id} style={{paddingTop: '2rem'}}>
                            <Card style={{
                                            textAlign: 'center',
                                            border: 'none',
                                            padding: '1rem',
                                            boxShadow: '12px 12px 20px 3px rgba(0, 0, 0, .1)',
                                    }}
                            >
                                <Card.Img 
                                    variant='top'
                                    src={product.image_desc}
                                />
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
                                            href={`/product/${product.category.title}/${product.id}`}
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
                                    <Button variant='success' className='myBtn'>
                                        In cos <ImCart/>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
             </Row>
        </React.Fragment>
    )
}

export default Products