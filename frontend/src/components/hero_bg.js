import React from "react";
import { Button, Card } from 'react-bootstrap';
function HeroBg(props) {
    return(
        <React.Fragment>
            <div className='hero-image' ref={props.homeRef}>
           
                <Card style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        border: 'none',
                        }}
                >
                        <Card.Text style={{
                                        textAlign: 'center',
                                        color: '#94b237',
                                        marginTop: '21rem',
                                        fontSize: '1.5rem'
                                    }}>
                            VINDECARE PRIN ALIMENTATIE
                        </Card.Text>
                        <Card.Title style={{
                                        textAlign: 'center',
                                        color: '#fff',
                                    }}>
                                    <h1 style={{fontWeight: 'bold', fontSize: '4rem'}}>VEDETI MAGAZINUL NOSTRU</h1>
                        </Card.Title>
                </Card>
                <div className='text-center'>
                    <Button 
                        variant='success' 
                        className='myBtnHero'
                        href='/breadcrumb/PRODUSE/TOATE PRODUSELE/'
                    >
                        Spre produse...
                    </Button>
                </div>
            </div>
        </React.Fragment>
            
        
    );
}

export default HeroBg