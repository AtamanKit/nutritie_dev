import { CardGroup, Card, Button, Figure, Row, Col } from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import { apiUrl } from './utils';

function Brands(props){
    const [brands, setBrands] = useState('');

    useEffect(() => {
        const url = apiUrl() + '/nut_app/brands/';

        const fetchData = async() => {
            try {
                const result = await fetch(url);
                const json = await result.json();
                setBrands(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [])

    return (
        <React.Fragment>
            {/* <div ref={props.catRef}> */}
            {/* <Card className='prod-cat' ref={props.brandRef}>
                <Card.Body>
                    <Card.Title>
                        <h2 className='produsele'>BRAND</h2>
                        <h2 className='categorii'>URI</h2>
                        <div className='card-line'/>
                    </Card.Title>
                    <Card.Text>
                        Producatori cu care colaboram
                    </Card.Text>
                </Card.Body>
            </Card> */}
            {/* </div> */}
            {/* <CardGroup style={{
                            paddingTop: '80px', 
                            paddingBottom: '80px',
                            paddingLeft: '2rem',
                            }}> */}
            
                <Row xs={2} md={5}>
                {
                    brands.length !== 0
                    ?   brands.map(brand =>
                        <Col key={brand.id} >
                        <Card style={{border: '0'}}>
                        <a href={`/breadcrumb/PRODUSE/${brand.title}/`}>
                            <Card.Img
                                src={brand.image_desc} 
                                style={{
                                    // paddingTop: '1rem',
                                    // paddingLeft:'1rem',
                                    // paddingRight: '1rem'
                                    padding: '4rem'
                                }}
                            />
                        </a>
                        </Card>
                        </Col>
                        
                    )
                    : []
                }
                </Row>            
            


            {/* </CardGroup> */}
        </React.Fragment>
    )
}

export default Brands