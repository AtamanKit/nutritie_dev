import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';


export default function SignIn() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const [validated, setValidated] = useState(false);
    const [error, setError] = useState({});

    const handleSubmit = e => {
        e.preventDefault();

        

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            // e.stopPropagation();
        }
    
        setValidated(true);
        // console.log(validated)

        if (firstName || lastName !== "") {
            fetch(`http://127.0.0.1:8000/auth/users/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: email,
                    email: email,
                    first_name: firstName,
                    last_name: lastName,
                    password: password,
                    re_password: password2,
                })
            })
            .then(res => res.json())
            .then(result => setError(result))
            .catch(error => console.log(error))

            // window.location.reload()
        }   
    }

    console.log(error);
    // if (error.includes('Enter a valid')) {
    //     console.log("yes")
    // } else {
    //     console.log("no")
    // }

    if (
        JSON.stringify(error).includes('id') &&
        JSON.stringify(error).includes('username') &&
        JSON.stringify(error).includes('email') &&
        JSON.stringify(error).includes('first_name') &&
        JSON.stringify(error).includes('last_name')
    ) {
        window.location.pathname = '/breadcrumb/STAREA/CONTURI/'
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
                JSON.stringify(error).includes('Enter a valid email address.')
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
                        EROARE: Validitate email
                    </Form.Label>
                :   ""
            }
            {
                JSON.stringify(error).includes('The password is too similar to the first name.')
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
                        Parola este prea asemanatoare cu prenumele
                    </Form.Label>
                :   ""
            }
            {
                JSON.stringify(error).includes('This password is too short.')
                ?   <Form.Label
                        style={{
                            color: 'red',
                            backgroundColor: 'yellow',
                            padding: '.2rem .2rem .2rem .7rem',
                            width: '100%',
                            border: '1px solid',
                            borderRadius: '4px',
                        }}
                    >
                        Parola este prea mica, trebuie sa contina cel putin 8 caractere
                    </Form.Label>
                : ""
            }
            {
                JSON.stringify(error).includes('This password is too common.')
                ?   <Form.Label
                        style={{
                            color: 'red',
                            backgroundColor: 'yellow',
                            padding: '.2rem .2rem .2rem .7rem',
                            width: '100%',
                            border: '1px solid',
                            borderRadius: '4px',
                        }}
                    >
                        Parola este prea simpla
                    </Form.Label>
                : ""
            }
            {
                JSON.stringify(error).includes('This password is entirely numeric.')
                ?   <Form.Label
                        style={{
                            color: 'red',
                            backgroundColor: 'yellow',
                            padding: '.2rem .2rem .2rem .7rem',
                            width: '100%',
                            border: '1px solid',
                            borderRadius: '4px',
                        }}
                    >
                        Parola este alcatuita doar din numere
                    </Form.Label>
                : ""
            }
            {
                JSON.stringify(error).includes("The two password fields didn't match.")
                ?   <Form.Label
                        style={{
                            color: 'red',
                            backgroundColor: 'yellow',
                            padding: '.2rem .2rem .2rem .7rem',
                            width: '100%',
                            border: '1px solid',
                            borderRadius: '4px',
                        }}
                    >
                        Campurile "Password" si "Confirm Password" nu coincid
                    </Form.Label>
                : ""
            }
            <Form.Group className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    required
                    type='email' 
                    placeholder='Trebuie sa contina "@"' 
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                    Introduceti un email valid
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>First name</Form.Label>
                <Form.Control 
                    required
                    placeholder='Introduceti prenumele'
                    onChange={e => setFirstName(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                    Introduceti prenumele
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                    required 
                    placeholder='Introduceti numele'
                    onChange={e => setLastName(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                    Introduceti numele
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    required
                    type='password' 
                    placeholder='Parola'
                    onChange={e => setPassword(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                    Introduceti parola
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    required
                    type='password' 
                    placeholder='Confirmare parola'
                    onChange={e => setPassword2(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                    Introduceti confirmarea parolei
                </Form.Control.Feedback>
            </Form.Group>
            <Button
                className='login_btn'
                variant='success'
                type='submit'
            >
                Inregistrati-va
            </Button>
        </Form>
    )
}