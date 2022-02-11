import { Tooltip, OverlayTrigger, Card, Button, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import BreadProd from './bread_prod';
import { ImCart } from 'react-icons/im';
import { CountText }  from './count_text';


// var text = []
// var num = 0
// const myCount = CountText(text, num);

// function CountFunc(title) {
//     var new_title = ""
//     if (title.length > 25) {
//         for (let i = 0; i < 20; i++) {
//             new_title = new_title + title[i]
//         }

//         new_title = new_title + "..."
//     } else var new_title = title

//     return new_title
// }

function Products() {
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
            <BreadProd 
                upGreen='VEDETI PRODUSELE DIN'
                downWhite='CATEGORIA: SUPLIMENTE'
            />
            <Row xs={1} md={5}>
                {
                    products.map(product =>
                        <Col style={{paddingTop: '2rem'}}>
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
                                            href={`/product%20detaliat/${product.id}`}
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