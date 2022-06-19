import { CardGroup, Card, Button, Carousel } from 'react-bootstrap';
import React, {useEffect, useState } from 'react';
import { CountText } from './count_text';

import { apiUrl } from './utils';
// import { quatesHtml } from './quates_html';

function Remedies(props){
    const [remedies, setRemedies] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const url = apiUrl() + '/nut_app/articlefeats/';

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

    function contrWidth() {
        setWidth(window.innerWidth)
    }

    window.addEventListener(
        'resize', contrWidth
    )

    function titleLong() {
        if (width <= 576) {
            return 35
        }
        
    }

    function textLong() {
        if (width <= 1200 && width >= 992) {
            return 250
        } else if (width <= 992 && width >= 768) {
            return 125
        } else if (width <= 768 && width >= 576) {
            return 62
        } else if (width <= 576) {
            return 31
        } else {
            return 500
        }
        
    }

    return (
        <React.Fragment>
            <Carousel variant='dark'>
                {
                    remedies.map(remedy =>
                        <Carousel.Item key={remedy.id}>
                            <div style={{display: 'flex'}}>
                                <div 
                                    style={{
                                        backgroundImage: `url(${remedy.article.image_desc})`,
                                        height: '50vh',
                                        width: '60%',
                                        backgroundPosition: 'bottom',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                    }}>
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
                                    <h3 style={{color: '#fff'}}>
                                        {
                                            CountText(remedy.article.title, titleLong())
                                        }
                                    </h3>
                                    <p style={{
                                        color: '#94b237',
                                        paddingTop: '1rem',
                                        paddingBottom: '2rem',
                                        }}
                                    >
                                        {   
                                            CountText(remedy.article.text, textLong())
                                        }
                                        {/* {contrWidth(remedy.article.text)} */}
                                    </p>
                                    <Button 
                                        href={`/breadcrumb/TOATE%20ARTICOLELE/`}
                                        variant='succes' 
                                        className='myBtn'
                                    >
                                        Toate artic...
                                    </Button>
                                    <Button 
                                        href={`/breadcrumb/ARTICOL/${remedy.article.category.title}/${remedy.article.id}`}
                                        variant='succes' 
                                        className='myBtnBord'
                                    >
                                        Mai mult...
                                    </Button>
                                </div>
                            </div>
                        </Carousel.Item>
                    )
                    
                }
            </Carousel>
        </React.Fragment>
    )
}

export default Remedies