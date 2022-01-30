import React from "react";
import { Button, Card } from 'react-bootstrap';
// import NavBar from "./navbar";
function HeroBg() {
    return(
        <React.Fragment>
            <div className='hero-image'>
           
            {/* <div className='hero-text'>
                <p>VINDECARE PRIN ALIMENTATIE</p>
                <h1>VEZI MAGAZINUL NOSTRU</h1>
                
            </div>
                <div className='hero-btns'>
                    <Button variant='success' className='myBtn'>Toate produsele</Button>
                </div> */}
            
            <Card style={{backgroundColor: 'rgba(0, 0, 0, 0.0)'}}>
                {/* <Card.Img src={require('../images/hero-bg-5.jpg')} alt="Card image" /> */}
                {/* <Card.ImgOverlay> */}
                    <Card.Text style={{
                                    textAlign: 'center',
                                    color: '#94b237',
                                    marginTop: '20rem',
                                    fontSize: '1.2rem'
                                }}>
                        VINDECARE PRIN ALIMENTATIE
                    </Card.Text>
                    <Card.Title style={{
                                    textAlign: 'center',
                                    color: '#fff',
                                }}
                                    ><h1 style={{fontWeight: 'bold', fontSize: '4rem'}}>VEZI MAGAZINUL NOSTRU</h1>
                    </Card.Title>
                    <Card className='card-hero-btn'>
                        <Button variant='success' className='myBtn'>Vezi produse...</Button>
                    </Card>
                    {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
                {/* </Card.ImgOverlay> */}
                </Card>
                </div>
        </React.Fragment>
            
        
    );
}

export default HeroBg