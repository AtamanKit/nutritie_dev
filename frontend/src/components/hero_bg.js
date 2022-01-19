import React from "react";
import { Button } from 'react-bootstrap';
// import NavBar from "./navbar";
function HeroBg() {
    return(
        <React.Fragment>
            <div className='hero-image'/>
            {/* <div className='hero-area'/>  */}
            
            <div className='hero-text'>
                <p>VINDECARE PRIN ALIMENTATIE</p>
                <h1>VEZI MAGAZINUL NOSTRU</h1>
                
                {/* <a href='/categorii' className='myBtn_out'>
                    Categorii
                </a> */}
                
            </div>
            <div className='hero-btns'>
                    {/* <a href='/toate_prod' className='myBtn'>
                        Toate produsele
                    </a> */}
                    <Button variant='success' className='myBtn'>Toate produsele</Button>
            </div>
        </React.Fragment>
            
        
    );
}

export default HeroBg