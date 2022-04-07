import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/auth/userSlice';
// import user_image from '../images/user_image.jpg'

export default function LoginEmail(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleStorage = user_data => {
        const user = JSON.parse(
            `{`+
            // `"user_id": "${user_data.id}"`+

            `"user_id": "${user_data.id}",`+
            `"first_name": "${user_data.first_name}",`+
            `"last_name": "${user_data.last_name}",`+
            `"email": "${user_data.username}",`+
            `"image_url": "user_image"`+
            `}`
        );

        dispatch(addUser(user));
    };
    
    const getUser = tokens => {
        fetch('http://127.0.0.1:8000/auth/users/me/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${tokens.access}`,
            },
        })
        .then(res => res.json())
        .then(result => handleStorage(result))
        .catch(error => console.log(error))
    };

    
    const handleSubmit = e => {
        e.preventDefault();
        
        fetch('http://127.0.0.1:8000/auth/jwt/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: email,
                password: password,
            })
        })
        .then(res => res.json())
        .then(result => getUser(result))
        .catch(error => console.log(error))


    }

    return(
        <React.Fragment>
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
                    onChange={(e) => {setEmail(e.target.value)}}
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
        </React.Fragment>
    )
}