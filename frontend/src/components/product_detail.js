import { Card, Tabs, Tab, Button, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { ImCart } from 'react-icons/im';
import { quatesHtml, elementPath } from './utils';

const pathname = elementPath()

function ProductDetail(props) {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const url = `http://127.0.0.1:8000/nut_app/products/${pathname.id}`;

        const fetchData = async() => {
            try {
                const result = await fetch(url);
                const json = await result.json();
                setProduct(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [])

    return(
        <React.Fragment>
            <Row xs={1} md={2} style={{paddingBottom: '2rem'}}>
                <Col>
                    <Card className='prog-img'>
                    {/* <div className='text-center'> */}
                        <Card.Img
                            src={product.image_desc}
                            style={{maxWidth: '35rem', marginTop: '4rem'}}
                        />
                        {/* </div> */}
                    </Card>
                    {/* <div className='text-center'>
                        <Image src={product.image_desc} />
                    </div> */}
                </Col>
                <Col style={{paddingLeft: '3rem'}}>
                    <h1 style={{
                            paddingTop: '8rem',
                            paddingBottom: '2rem',
                            }}
                    >
                        {product.title}
                    </h1>
                    <div>
                        <h6 style={{color: '#94b237', display: 'inline'}}>COD PRODUS:</h6>
                        <h6 style={{display: 'inline'}}> {product.product_code}</h6>
                    </div>
                    <div>
                        <h6 style={{color: '#94b237', display: 'inline'}}>DISPONIBILITATE: </h6>
                        <h6 
                            style={{display: 'inline', color: 'rgb(200, 41, 41)'}}
                        > 
                            {product.stock}
                        </h6>
                    </div>
                    <div>
                        <h6 style={{color: '#94b237', display: 'inline'}}>FORMA PREZENTARE:</h6>
                        <h6 style={{display: 'inline'}}> {product.form}</h6>
                    </div>
                    <div style={{paddingBottom: '2rem'}}>
                        <h6 style={{color: '#94b237', display: 'inline'}}>PRET:</h6>
                        <h6 style={{display: 'inline'}}> {product.price}</h6>
                        <h6 style={{display: 'inline'}}> lei</h6>
                    </div>
                
                    <Tabs 
                        defaultActiveKey='description'
                        className='mb-3'
                        id="uncontrolled-tab-example" 
                    >
                        <Tab 
                            eventKey='description'
                            title={<h6 style={{color: '#94b237'}}>DESCRIERE</h6>}
                            className='tab-prod'
                            dangerouslySetInnerHTML={quatesHtml(product.description)}
                        >
                            {/* {product.description} */}
                        </Tab>
                        <Tab 
                            eventKey='administration'
                            title={<h6 style={{color: '#94b237'}}>MOD DE ADMINISTRARE</h6>}
                            className='tab-prod'
                            dangerouslySetInnerHTML={quatesHtml(product.administration)}
                        >
                            {/* {product.administration} */}
                        </Tab>
                        <Tab
                            eventKey='content'
                            title={<h6 style={{color: '#94b237'}}>NUTRIENTI</h6>}
                            className='tab-prod'
                            dangerouslySetInnerHTML={quatesHtml(product.content)}
                        >
                            {/* {product.contraindications} */}
                        </Tab>
                        <Tab 
                            eventKey='ingredients'
                            title={<h6 style={{color: '#94b237'}}>INGREDIENTE</h6>}
                            className='tab-prod'
                            dangerouslySetInnerHTML={quatesHtml(product.ingredients)}
                        >
                            {/* {product.ingredients} */}
                        </Tab>
                    </Tabs>
                    <div style={{paddingBottom: '2rem'}}>
                        <Button 
                            variant='success'
                            className='myBtn'
                            style={{marginRight: '1rem'}}
                        >
                            Cumparati...
                        </Button>
                        <Button
                            variant='success'
                            className='myBtn'
                        >
                            In cos <ImCart/>
                        </Button>
                    </div>
                </Col>
                {/* <Col>
                     <SideList
                        list='categories'
                        header='CATEGORII DE PRODUSE'
                        namespace='suplimente'
                     />
                     <SideList
                        list='brands'
                        header='PRODUCATORI'
                     />
                </Col> */}
            </Row>
        </React.Fragment>
    )
}

export default ProductDetail