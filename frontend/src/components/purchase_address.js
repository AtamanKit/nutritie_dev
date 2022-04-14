import { Form, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function PurchaseAddress() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        setValidated(true)
    }

    return(
        <div>
            <div style={{
                textAlign: 'center',
                margin: '4% 0 0 0'
            }}>
                <h3>INTRODUCETI DATELE CU PRIVIRE LA ADRESA SI NUMELE DVS.</h3>
            </div>
            <Form
                style={{
                    margin: '1% 20% 4% 20%'
                }}
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
            >
                <Row className='mb-3'>
                    <Form.Group as={Col}>
                        <Form.Label>Prenume</Form.Label>
                        <Form.Control
                            required
                            placeholder='Introduceti prenume' 
                        />
                        <Form.Control.Feedback type='invalid'>
                            Introduceti prenume
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Nume</Form.Label>
                        <Form.Control
                            required
                            placeholder='Introduceti nume' 
                        />
                        <Form.Control.Feedback type='invalid'>
                            Introduceti nume
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Form.Group as={Col}>
                        <Form.Label>Numar telefon</Form.Label>
                        <Form.Control
                            required
                            placeholder='Introduceti numar telefon'
                        />
                        <Form.Control.Feedback type='invalid'>
                            Introduceti numar de telefon
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            required
                            type='email'
                            placeholder='Introduceci email'
                        />
                        <Form.Control.Feedback type='invalid'>
                            Introduceti un email valid
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Form.Group className='mb-3'>
                    <Form.Label>Adresa</Form.Label>
                    <Form.Control
                        required
                        placeholder='str., nr. bloc/nr. apartament (localitate rurala)'
                    />
                    <Form.Control.Feedback type='invalid'>
                        Introduceti adresa
                    </Form.Control.Feedback>
                </Form.Group>
                <Row className='mb-3'>
                    <Form.Group as={Col}>
                        <Form.Label>Tara</Form.Label>
                        <Form.Select 
                            required
                            defaultValue='Alegeti...'
                        >
                            <option>Republica Moldova</option>
                            <option>Romania</option>
                        </Form.Select>
                        <Form.Control.Feedback type='invalid'>
                            Introduceti tara
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Raion/Judet</Form.Label>
                        <Form.Select 
                            required
                            defaultValue='Alegeti...'
                        >
                            <option>Anenii Noi</option>
                            <option>Basarabeasca</option>
                            <option>Briceni</option>
                            <option>Cahul</option>
                            <option>Cantemir</option>
                            <option>Calarasi</option>
                            <option>Causeni</option>
                            <option>Cimislia</option>
                            <option>Criuleni</option>
                            <option>Donduseni</option>
                            <option>Drochia</option>
                            <option>Dubasari</option>
                            <option>Edinet</option>
                            <option>Falesti</option>
                            <option>Floresti</option>
                            <option>Glodeni</option>
                            <option>Hincesti</option>
                            <option>Ialoveni</option>
                            <option>Leova</option>
                            <option>Nisporeni</option>
                            <option>Ocnita</option>
                            <option>Orhei</option>
                            <option>Rezina</option>
                            <option>Riscani</option>
                            <option>Singerei</option>
                            <option>Soroca</option>
                            <option>Straseni</option>
                            <option>Soldanesti</option>
                            <option>Stefan Voda</option>
                            <option>Taraclia</option>
                            <option>Telenesti</option>
                            <option>Ungheni</option>
                        </Form.Select>
                        <Form.Control.Feedback type='invalid'>
                            Introduceti regiunee
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button 
                    type='submit' 
                    variant='success'
                    className='login_btn'
                >
                    Trimiteti date
                </Button>
            </Form>
        </div>
    )
}