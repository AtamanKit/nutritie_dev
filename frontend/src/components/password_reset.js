import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import { apiUrl } from './utils';

export default function PasswordReset() {
    const [validated, setValidated] = useState(false);

    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('undefined');

    const handleSubmit = e => {
        e.preventDefault()

        setValidated(true)

        setError('loading')

        const urlList = window.location.pathname.split('/');
        const uid = urlList[4];
        const token = urlList[5];

        fetch(apiUrl() + '/auth/users/reset_password_confirm/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                uid: uid,
                token: token,
                new_password: password,
                re_new_password: password2,
            })
        })
        .then(res => res.text())
        .then(result => setError(result))
        .catch(error => console.log(error))
    }

    if (error === '') {
        window.location.pathname = '/breadcrumb/REUSITA/PAROLA/'
    }

    let buttonName = 'Confirmati parola'

    if (error === 'loading') {
        buttonName = 'Incarcare...'
    }

    return(
        <div>
            <div
                style={{
                    textAlign: 'center',
                    margin: '3% 3% 2% 3%',
                    color: 'rgb(80, 80, 80)',
                }}
            >
                <h1 className='activation-text'>
                    RESETATI PAROLA INTRODUCAND:
                </h1>
            </div>
            <Form
                noValidate
                validated={validated}
                className='form-password-reset'
                onSubmit={handleSubmit}
            >
                {
                    error.includes('This password is too short.')
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
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control 
                        required
                        type="password"
                        placeholder="Parola noua"
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Confirmati parola noua"
                        onChange={e => setPassword2(e.target.value)}
                    />
                </Form.Group>
                <Button 
                    variant='success'
                    className='login_btn'
                    type='submit'
                >
                    {buttonName}
                </Button>
            </Form>
        </div>
    )
}