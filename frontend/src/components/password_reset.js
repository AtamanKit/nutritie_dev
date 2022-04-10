import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function PasswordReset() {
    const [validated, setValidated] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        setValidated(true)
    }

    return(
        <div
            style={{
                textAlign: 'center',
                margin: '10% 10% 10% 10%',
                color: 'rgb(80, 80, 80)',
            }}
        >
            <h1 className='activation-text'>
                RESETATI PAROLA INTRODUCAND:
            </h1>
            <Form
                noValidate
                validated={validated}
                style={{
                    width: '70%',
                }}
                onSubmit={handleSubmit}
            >
                <Button 
                    variant='success'
                    className='login_btn'
                    type='submit'
                >
                    Cofirmati parola
                </Button>
            </Form>
        </div>
    )
}