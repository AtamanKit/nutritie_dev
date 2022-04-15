import { Form, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function ClientAddress() {
    const [validated, setValidated] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [checked, setChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        setValidated(true)

        // if (checked) {
            fetch('http://127.0.0.1:8000/accounts/clients/', {
                method: 'POST',
                headers: {
                    'Content-Typs': 'application/json',
                },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    telephone: telephone,
                    email: email,
                    address: address,
                    // country: document.getElementById('country').value,
                    // region: document.getElementById('region').value,
                })
            })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(error => console.log(error))
        // }
        // console.log(document.getElementById('country').value);
        // console.log(document.getElementById('region').value)
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
                            onChange={e => setFirstName(e.target.value)}
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
                            onChange={e => setLastName(e.target.value)}
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
                            onChange={e => setTelephone(e.target.value)}
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
                            onChange={e => setEmail(e.target.value)}
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
                        onChange={e => setAddress(e.target.value)}
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
                            id='country'
                        >
                            <option value='Moldova'>Republica Moldova</option>
                            <option value='Romania'>Romania</option>
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
                            id='region'
                        >
                            <option value='Anenii Noi'>Anenii Noi</option>
                            <option value='Basarabeasca'>Basarabeasca</option>
                            <option value='Briceni'>Briceni</option>
                            <option value='Cahul'>Cahul</option>
                            <option value='Cantemir'>Cantemir</option>
                            <option value='Calarasi'>Calarasi</option>
                            <option value='Causeni'>Causeni</option>
                            <option value='Cimislia'>Cimislia</option>
                            <option value='Criuleni'>Criuleni</option>
                            <option value='Donduseni'>Donduseni</option>
                            <option value='Drochia'>Drochia</option>
                            <option value='Dubasari'>Dubasari</option>
                            <option value='Edinet'>Edinet</option>
                            <option value='Falesti'>Falesti</option>
                            <option value='Floresti'>Floresti</option>
                            <option value='Glodeni'>Glodeni</option>
                            <option value='Hincesti'>Hincesti</option>
                            <option value='Ialoveni'>Ialoveni</option>
                            <option value='Leova'>Leova</option>
                            <option value='Nisporeni'>Nisporeni</option>
                            <option value='Ocnita'>Ocnita</option>
                            <option value='Orhei'>Orhei</option>
                            <option value='Rezina'>Rezina</option>
                            <option value='Riscani'>Riscani</option>
                            <option value='Singerei'>Singerei</option>
                            <option value='Soroca'>Soroca</option>
                            <option value='Straseni'>Straseni</option>
                            <option value='Soldanesti'>Soldanesti</option>
                            <option value='Stefan Voda'>Stefan Voda</option>
                            <option value='Taraclia'>Taraclia</option>
                            <option value='Telenesti'>Telenesti</option>
                            <option value='Ungheni'>Ungheni</option>
                        </Form.Select>
                        <Form.Control.Feedback type='invalid'>
                            Introduceti regiunee
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Check 
                        required
                        type='checkbox' 
                        label='Termeni si conditii'
                        onChange={e => setChecked(e.target.checked)}
                    />
                    <p>
                        In urma inregistrarii datelor dumneavaostra
                        un reprezentat din partea noastra va va contacta
                        pentru a stabili modalitatea de plata si trimitere a produsului.
                        <br />
                        Garantam discretia si nedistribuirea datelor cu caracter personal.
                    </p>
                <Form.Control.Feedback type='invalid'>
                    Acceptati termenii si conditiile
                </Form.Control.Feedback>
                </Form.Group>
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