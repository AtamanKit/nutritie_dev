import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function PasswordReset() {
    const [validated, setValidated] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        setValidated(true)
    }

    return(
        <div>
            <div
                style={{
                    textAlign: 'center',
                    margin: '10% 10% 2% 10%',
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
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        required
                        type="password"
                        placeholder="Parola"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Confirmati Parola"
                    />
                </Form.Group>
                <Button 
                    variant='success'
                    className='login_btn'
                    type='submit'
                >
                    Confirmati parola
                </Button>
            </Form>
        </div>
    )
}