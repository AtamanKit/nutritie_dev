import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function LoginEmail(){
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    const [password, setPassword] = useState('')

    // const handleEmail = (e) => {
    //     console.log(e.target.value)
    // }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(emailError)
        
        // fetch('http://127.0.0.1:8000/api/token/', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         username: 
        //     })
        // })
    }

    return(
        <Form 
            style={{
                width: '70%',
                margin: '0 0 0 15%',
            }}
            onSubmit={handleSubmit}
        >
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Trebuie sa contina '@'"
                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setEmailError(e)
                                    }
                            }
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {setPassword(e.target.value)}}
                /> 
            </Form.Group>
            <Button 
                className='login_btn'
                variant='success'
                type='submit'
            >
                Logati-va
            </Button>
        </Form>
    )
}