import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/auth/userSlice';
import { apiUrl } from './utils';
// import user_image from '../images/user_image.jpg'

export default function LoginEmail(props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [validated, setValidated] = useState(false);
    const [tokenCheck, setTokenCheck] = useState(true);

// Bellow constant is for controling password reset inside component
    const [passResetCheck, setPassResetCheck] = useState(false);
    const [emailPassReset, setEmailPassReset] = useState('');
    const [error, setError] = useState('undefined');

    const [loader, setLoader] = useState(false)

    const dispatch = useDispatch();

// Function to contol password reset (useState for inside component, 
// props for outside in navbar parent component)
    const handlePassReset = () => {
        setPassResetCheck(true);
        props.passResetFunc(true)
    }

    const handleChPass = e => {
        e.preventDefault();

        setValidated(true);

        setError('loading')

        fetch(apiUrl() + '/auth/users/reset_password/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: emailPassReset,
            })
        })
        .then(res => res.text())
        .then(result => setError(result))
        .catch(error => console.log(error))

    }
    
    if (error === '') {
        window.location.pathname = '/breadcrumb/VERIFICARE/PAROLA/'
    }

    let passResetButton = 'Schimbati parola'

    if (error === 'loading') {
        passResetButton = 'Incarcare...'
    }



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
            fetch(apiUrl() + '/auth/users/me/', {
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
            setLoader(false)
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
    
        setValidated(true);

        setLoader(true);

        if (email !== "" || password !== "") {
            fetch(apiUrl() + '/auth/jwt/create/', {
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

    let loginButton = 'Logati-va'

    if (loader) {
        loginButton = 'Incarcare...'
    }

    if (!passResetCheck) {
        return(
            <React.Fragment>
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
                        {loginButton}
                    </Button>
                    
                </Form>
                <div style={{
                    margin: '5% 0 0 10%',
                    fontSize: '14px',
                    }}
                >
                    <a 
                        className='password-forgot-link'
                        onClick={handlePassReset}
                    >
                        Ati utitat parola?
                    </a>
                </div>
            </React.Fragment>
        )
    } else {
        return(
            <Form
                noValidate
                validated={validated}
                style={{
                    width: '70',
                    margin: '0 0 0 15%',
                }}
                onSubmit={handleChPass}
            >
                {
                    error.includes('Enter a valid email address.')
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
                            Adresa email nu este valida
                        </Form.Label>
                    :   ""
                }
                {
                    error.includes('User with given email does not exist.')
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
                            Nu exista cont cu un astfel de email
                        </Form.Label>
                    :   ""
                }
                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        required 
                        type='email' 
                        placeholder="Trebuie sa contina '@'"
                        onChange={e => {setEmailPassReset(e.target.value)}}
                    />
                    <Form.Control.Feedback type='invalid'>
                        Introduceti un email valid
                    </Form.Control.Feedback>
                </Form.Group>
                <Button
                    className='login_btn'
                    variant='success'
                    type='submit'
                >
                    {passResetButton}
                </Button>
            </Form>
        )
    }
}