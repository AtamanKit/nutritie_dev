import { CardGroup, Card, Button, Row, Col }  from 'react-bootstrap';
import React, { useEffect, useEffects, useState } from 'react';

function Products(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/nut_app/products/';

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
            <Row md={5}>
                {
                    products.map(product =>
                        <Col>
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
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Title><h1>{product.price} lei</h1></Card.Title>
                                    <Button variant='success' className='myBtn'>
                                        Adaugati in cos
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