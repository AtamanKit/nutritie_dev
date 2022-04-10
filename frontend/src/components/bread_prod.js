import React from "react";
import { Card } from 'react-bootstrap';
function BreadProd(props) {
    return(
        <React.Fragment>
            <div className='bread-prod-image'>
            {/* <img src={require('../images/breadcrumb-supl.jpg')}/> */}
           
            <Card style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.0)',
                    border: 'none',
                    }}
            >
                    <Card.Text style={{
                                    textAlign: 'center',
                                    color: '#94b237',
                                    marginTop: '10rem',
                                    fontSize: '1.2rem'
                                }}>
                        {props.upGreen}
                    </Card.Text>
                    <Card.Title style={{
                                    textAlign: 'center',
                                    color: '#fff',
                                }}
                    >
                        <h1 className='bread-text'>
                            {props.downWhite}
                        </h1>
                    </Card.Title>
                </Card>
                </div>
        </React.Fragment>
            
        
    );
}

export default BreadProd