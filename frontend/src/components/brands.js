import { CardGroup, Card, Button, Figure } from 'react-bootstrap';
import React, {useEffect, useState} from 'react';

function Brands(props){
    const [brands, setBrands] = useState('');

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/nut_app/brands/';

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
    // console.log(categories.length)

    return (
        <React.Fragment>
            {/* <div ref={props.catRef}> */}
            <Card className='prod-cat' ref={props.brandRef}>
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
            </Card>
            {/* </div> */}
            <CardGroup style={{
                            paddingTop: '80px', 
                            paddingBottom: '80px',
                            paddingLeft: '2rem',
                            }}>
            
            
                {
                    brands.length !== 0
                    ?   brands.map(brand =>
                        <Card style={{border: '0'}}>
                        
                            <Card.Img
                                src={brand.image_desc} 
                                style={{
                                    // paddingTop: '1rem',
                                    paddingLeft:'1rem',
                                    paddingRight: '1rem'
                                }}
                            />
                        </Card>
                        
                    )
                    : []
                }
            


            </CardGroup>
        </React.Fragment>
    )
}

export default Brands