import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/auth/userSlice';
// import user_image from '../images/user_image.jpg'

export default function LoginEmail(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [validated, setValidated] = useState(false);
    const [tokenCheck, setTokenCheck] = useState(true);

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

        window.location.reload();
    };
    
    const getUser = tokens => {
        
        if (tokens.access) {
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
        } else {
            setTokenCheck(false)
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
        }
    
        setValidated(true);

        if (email !== "" || password !== "") {
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
    }

    return(
        <Form
            noValidate
            validated={validated} 
            style={{
                width: '70%',
                margin: '0 0 0 15%',
            }}
            onSubmit={handleSubmit}
        >
            {
                !tokenCheck
                ?   <Form.Label 
                        style={{
                            color: 'red',
                            backgroundColor: 'yellow',
                            padding: '.2rem .2rem .2rem .7rem',
                            width: '100%',
                            border: '1px solid' ,
                            borderRadius: '4px',
                        }}
                    >
                        Ati introdus gresit unul din campuri
                    </Form.Label>
                :   ""
            }
            {/* <Form.Label>"{tokenCheck}"</Form.Label> */}
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    required
                    type="email" 
                    placeholder="Trebuie sa contina '@'"
                    onChange={(e) => {setEmail(e.target.value)}}
                />
                <Form.Control.Feedback type='invalid'>
                    Introduceti un email valid
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type="password"
                    placeholder="Parola"
                    onChange={(e) => {setPassword(e.target.value)}}
                /> 
                <Form.Control.Feedback type='invalid'>
                    Introduceti parola
                </Form.Control.Feedback>
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