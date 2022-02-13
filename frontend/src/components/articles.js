import { Tooltip, OverlayTrigger, Row, Col, Card, CardGroup, Button } from 'react-bootstrap';
import React, {useEffect, useState } from 'react';
import { CountText } from './count_text';
import { elementPath } from './utils';

const pathname = elementPath()

function Articles(props){
    const [articles, setArticles] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const url = `http://127.0.0.1:8000/nut_app/remedies/`;

        const fetchData = async() => {
            try {
                const result = await fetch(url);
                const json = await result.json();
                setArticles(json);
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
        if (width <= 1200 && width >= 992) {
            return 20
        } else if (width <= 992 && width >= 768) {
            return 15
        // } else if (width <= 768 && width >= 576) {
        //     return 30
        } else if (width <= 576) {
            return 24
        } else {
            return 24
        }
        
    }

    function textLong() {
        if (width <= 1200 && width >= 992) {
            return 150
        } else if (width <= 992 && width >= 768) {
            return 75
        // } else if (width <= 768 && width >= 576) {
        //     return 30
        // } else if (width <= 576) {
        //     return 75
        } else {
            return 300
        }
        
    }

    function finalReturn(article) {
        const hrefpath = `/breadcrumb/ARTICOL/${article.category.title}/${article.id}`
        return (
            <React.Fragment>
                <Col key={article.id} style={{paddingTop: '2rem'}}>
                    <Card style={{
                                    // textAlign: 'center',
                                    border: 'none',
                                    padding: '1rem',
                                    boxShadow: '12px 12px 20px 3px rgba(0, 0, 0, .1)',
                            }}
                    >
                        <a 
                            href={hrefpath}
                            style={{
                                color: 'rgb(30, 30, 30)',
                                textDecorationLine: 'none',
                            }}
                        >
                            <Card.Img 
                                variant='top'
                                src={article.image_desc}
                            />
                            <Card.Body>
                                <OverlayTrigger
                                    key='top'
                                    placement='top'
                                    overlay={
                                        <Tooltip 
                                            id={`tooltip-top`} 
                                        >
                                            {article.title}
                                        </Tooltip>
                                    }
                                >
                                <Card.Title>
                                    
                                            {CountText(article.title, titleLong())}
                                    
                                </Card.Title>
                                </OverlayTrigger>
                                <Card.Text>
                                    {
                                        CountText(article.text, textLong())
                                    }
                                </Card.Text>
                                
                                <Button 
                                    variant='success' 
                                    className='myBtn'
                                    // href={`/remediu%20detaliat/${article.id}`}
                                >
                                    Accesati...
                                </Button>
                            </Card.Body>
                        </a>
                    </Card>
                </Col>
            </React.Fragment>
        )
    }

    function articleReturn(article) {
        return(
            <React.Fragment>
                {
                    window.location.pathname === '/breadcrumb/ARTICOLE/TOATE%20ARTICOLELE/'
                    ?   finalReturn(article)
                    :   article.category.title === pathname.category
                    ?   finalReturn(article)
                    :   []
                }
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Row xs={1} md={4}>
                {
                    articles.map(article =>
                        articleReturn(article)
                    )
                }
            </Row>
        </React.Fragment>
    )
}

export default Articles