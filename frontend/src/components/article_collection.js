import { CardGroup, Card, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

function articleCollection(props){
    const [collections, setArticle_collections] = useState([]);

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/nut_app/articlecollections/';

        const fetchData = async() => {
            try {
                const result = await fetch(url);
                const json = await result.json();
                setArticle_collections(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [])
    // console.log(window.location.pathname)

    return (
        <React.Fragment>
            {/* <div ref={props.catRef}> */}
            <Card className='prod-cat' ref={props.catRef}>
                <Card.Body>
                    <Card.Title>
                        <h2 className='produsele'>CATEGORII </h2>
                        <h2 className='categorii'>DE ARTICOLE</h2>
                        <div className='card-line'/>
                    </Card.Title>
                    <Card.Text>
                        Accesati una din categorii pentru a vedea articolele
                    </Card.Text>
                </Card.Body>
            </Card>
            {/* </div> */}
            <CardGroup>
                {
                    article_collections.map(article_colletion =>
                        <Card className='card-body'>
                            <Card.Img 
                                    variant='top' 
                                    src={category.image_desc} 
                                    
                            />
                            <Card.Body>
                                <Card.Title>{category.title}</Card.Title>
                                <Card.Text>{category.description}</Card.Text>
                                <Button href='/suplimente/' variant='success' className='myBtn'>
                                    Accesati...
                                </Button>
                            </Card.Body>
                        </Card>
                    )
                }
            </CardGroup>
        </React.Fragment>
    )
}

export default Categories