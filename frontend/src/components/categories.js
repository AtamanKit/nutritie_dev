import { CardGroup, Card, Button } from 'react-bootstrap';
// import alim_img from '../images/alimente_366x160.jpg';
// import supl_img from '../images/suplimente_366x160.jpg';
// import ingr_corp_img from '../images/ingr_corp_366x160.jpg';
import React, {useEffect, useState} from 'react';

function Categories(props){
    const [categories, setCategories] = useState('');

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/nut_app/categories/';

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
    // console.log(categories.length)

    return (
        <React.Fragment>
            {/* <div ref={props.catRef}> */}
            <Card className='prod-cat' ref={props.catRef}>
                <Card.Body>
                    <Card.Title>
                        <h2 className='produsele'>PRODUSE </h2>
                        <h2 className='categorii'>PE CATEGORII</h2>
                    </Card.Title>
                    <div className='card-line'/>
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
                {/* <Card className='cardbody'>
                    <Card.Img 
                        variant='top'
                        src={supl_img}
                    />
                    <Card.Body>
                        <Card.Title>SUPLIMENTE</Card.Title>
                        <Card.Text>
                            Aici gasiti suplimente cu efect medicamentos. Aceste suplimente
                            sint 100% produse naturale. Pot fi folosite atit in scopuri de
                            vindecare cit si cu orice ocazie alimentara.
                        </Card.Text>
                        <Button variant='success' className='cat-btn'>
                            Accesati...
                        </Button>
                    </Card.Body>
                </Card> */}
                {/* <Card className='cardbody'>
                    <Card.Img 
                        variant='top'
                        src={ingr_corp_img}
                    />
                    <Card.Body>
                        <Card.Title>INGRIJIRE CORPORALA</Card.Title>
                        <Card.Text>
                            In aceasta categorie gasiti produse pentru ingrijirea corpului.
                            Produsele sint de origine naturala si au ca scop imbunatatirea
                            stratului epidermal.
                        </Card.Text>
                        <Button variant='success' className='cat-btn'>
                            Accesati...
                        </Button>
                    </Card.Body>
                </Card> */}
            </CardGroup>
        </React.Fragment>
    )
}

export default Categories