import { CardGroup, Card, Button } from 'react-bootstrap';
import React, {useEffect, useState} from 'react';

function Remedies(props){
    const [rmedies, setRemedies] = useState('');

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
                        <h2 className='produsele'>PRODUSE </h2>
                        <h2 className='categorii'>PE CATEGORII</h2>
                        <div className='card-line'/>
                    </Card.Title>
                    <Card.Text>
                        Accesati una din categorii pentru a vedea produsele.
                    </Card.Text>
                </Card.Body>
            </Card>
            {/* </div> */}
            <CardGroup>
                {
                    categories.length !== 0
                    ?   categories.map(category =>
                        <Card className='cardbody'>
                            <Card.Img 
                                    variant='top' 
                                    src={category.image_desc} 
                                    
                            />
                            <Card.Body>
                                <Card.Title>{category.title}</Card.Title>
                                <Card.Text>{category.description}</Card.Text>
                                <Button variant='success' className='cat-btn'>
                                    Accesati...
                                </Button>
                            </Card.Body>
                        </Card>
                    )
                    : []
                }
            </CardGroup>
        </React.Fragment>
    )
}

export default Categories