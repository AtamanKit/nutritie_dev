import { CardGroup, Card, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

function Categories(props){
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const url = props.url

        const fetchData = async() => {
            try {
                const result = await fetch(url);
                const json = await result.json();
                setCategories(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [])

    return (
        <React.Fragment>
            <Card className='prod-cat' ref={props.catRef}>
                <Card.Body>
                    <Card.Title>
                        <h2 className='produsele'>{props.first_title} </h2>
                        <h2 className='categorii'>{props.second_title}</h2>
                        <div className='card-line'/>
                    </Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
            <CardGroup>
                {
                    categories.map(category =>
                        <Card key={category.id} className='card-body'>
                            <Card.Img 
                                    variant='top' 
                                    src={category.image_desc}
                                    
                            />
                            <Card.Body>
                                <Card.Title>{category.title}</Card.Title>
                                <Card.Text>{category.description}</Card.Text>
                                <Button href={`/categoria/${category.title}/`} variant='success' className='myBtn'>
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