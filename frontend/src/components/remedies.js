import { CardGroup, Card, Button, Carousel } from 'react-bootstrap';
import React, {useEffect, useState } from 'react';
import { CountText } from './count_text';
// import { quatesHtml } from './quates_html';

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
                                <div style={{display: 'flex'}}>
                                <div 
                                    style={{
                                        backgroundImage: `url(${remedy.image_desc})`,
                                        height: '50vh',
                                        width: '60%',
                                        backgroundPosition: 'bottom',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                    }}>
                                {/* <img */}
                                    {/* // className='d-block w-200' */}
                                    {/* // src={remedy.image_short} */}
                                {/* /> */}
                                </div>
                                <div style={{
                                        backgroundColor: 'rgba(50, 50, 50, 0.7)',
                                        paddingTop: '1rem',
                                        paddingBottom: '1rem',
                                        paddingLeft: '2rem',
                                        paddingRight: '2rem',
                                        textAlign: 'center',
                                        width: '40%',
                                        paddingTop: '5rem',
                                        }}>
                                        <h3 style={{color: '#fff'}}>{remedy.title}</h3>
                                        <p style={{
                                            color: '#94b237',
                                            paddingTop: '1rem',
                                            paddingBottom: '2rem',
                                            }}
                                        >
                                            {CountText(remedy.text, 510)}
                                        </p>
                                        <Button 
                                            href={`/remediu%20detaliat/${remedy.id}`}
                                            variant='succes' 
                                            className='myBtn'
                                        >
                                            Toate rem...
                                        </Button>
                                        <Button 
                                            href={`/remediu%20detaliat/${remedy.id}`}
                                            variant='succes' 
                                            className='myBtnBord'
                                        >
                                            Mai mult...
                                        </Button>
                                    </div>
                                    </div>
                                {/* <Carousel.Caption>
                                    <div style={{
                                        backgroundColor: 'rgba(50, 50, 50, 0.7)',
                                        paddingTop: '1rem',
                                        paddingBottom: '1rem',
                                        paddingLeft: '2rem',
                                        paddingRight: '2rem',
                                        }}>
                                        <h3 style={{color: '#fff'}}>{remedy.title}</h3>
                                        <p style={{color: '#94b237'}}>{remedy.description}</p>
                                        <Button 
                                            href={`/remediu%20detaliat/${remedy.id}`}
                                            variant='succes' className='myBtn'
                                        >
                                            Mai mult...
                                        </Button>
                                    </div>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        )
                    : []
                }
            </Carousel>
        </React.Fragment>
    )
}

export default Remedies