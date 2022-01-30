import { CardGroup, Card, Button, Carousel } from 'react-bootstrap';
import React, {useEffect, useState } from 'react';

function Remedies_feat(props){
    const [remedies, setRemedies] = useState('');

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/nut_app/remedies/';

        const fetchData = async() => {
            try {
                const result = await fetch(url);
                const json = await result.json();
                setRemedies(json);
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
            <Card className='prod-cat' ref={props.catRef}>
                <Card.Body>
                    <Card.Title>
                        <h2 className='produsele'>RECOMANDARI </h2>
                        <h2 className='categorii'>SI REMEDII</h2>
                        <div className='card-line'/>
                    </Card.Title>
                    <Card.Text>
                        Accesati una din categorii pentru a vedea produsele.
                    </Card.Text>
                </Card.Body>
            </Card>
            {/* </div>
            {/* <CardGroup className='front-widths'>
                {
                    remedies.length !== 0
                    ?   remedies.map(remedy =>
                        <Card>
                            <Card.Img 
                                    variant='top' 
                                    src={remedy.image_desc} 
                                    
                            />
                            <Card.ImgOverlay>
                                <Card.Title>{remedy.title}</Card.Title>
                                <Card.Text>{remedy.feat_text}</Card.Text>
                                <Button variant='success' className='cat-btn'>
                                    Accesati...
                                </Button>
                            </Card.ImgOverlay>
                        </Card>
                    )
                    : []
                }
            </CardGroup> */}
            <Carousel variant='dark'>
                {
                    remedies.length !== 0
                    ?   remedies.map(remedy =>
                            <Carousel.Item>
                                <img
                                    className='d-block w-200'
                                    src={remedy.image_desc}
                                />
                                <Carousel.Caption>
                                    <h3>{remedy.title}</h3>
                                    <p>{remedy.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    : []
                }
            </Carousel>
        </React.Fragment>
    )
}

export default Remedies_feat