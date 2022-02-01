import { CardGroup, Card, Button, Carousel } from 'react-bootstrap';
import React, {useEffect, useState } from 'react';

function Remedies(props){
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
            <Card className='prod-cat' ref={props.remRef}>
                <Card.Body>
                    <Card.Title>
                        <h2 className='produsele'>RECOMANDARI </h2>
                        <h2 className='categorii'>SI REMEDII</h2>
                        <div className='card-line'/>
                    </Card.Title>
                    <Card.Text>
                        Venim cu unele sfaturi
                    </Card.Text>
                </Card.Body>
            </Card>
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
                                    <div style={{
                                        backgroundColor: 'rgba(50, 50, 50, 0.7)',
                                        paddingTop: '1rem',
                                        paddingBottom: '1rem',
                                        paddingLeft: '2rem',
                                        paddingRight: '2rem',
                                        }}>
                                        <h3 style={{color: '#fff'}}>{remedy.title}</h3>
                                        <p style={{color: '#94b237'}}>{remedy.description}</p>
                                        <Button variant='succes' className='myBtn'>Mai mult...</Button>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    : []
                }
            </Carousel>
        </React.Fragment>
    )
}

export default Remedies