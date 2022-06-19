import { Form, Row, Col, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { decrementProdAll } from '../features/cart/prodSlice';
import { decrementAll } from '../features/cart/counterSlice';
import { emptyCart } from '../features/cart/cartSlice';

import OrderConfirmation from './order_confirmation';

import { apiUrl } from './utils';


let productsPrice = 0;
let deliveryPrice = 0;
let totalPrice = 0;

let products = [];
let commandID = 0;

export default function Order() {
    
    const [validated, setValidated] = useState(false);

    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [checked, setChecked] = useState(false);
    const [country, setCountry] = useState('Republica Moldova');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [order, setOrder] = useState('');
    const [lastOrder, setLastOrder] = useState('');

    const inCart = useSelector((state) => state.cart.items);
    const count = useSelector((state) => state.prodCart.items);

    useEffect(() => {
        fetch(apiUrl() + '/sales/lastorder/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(result => setLastOrder(result))
        .catch(error => console.log(error))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setValidated(true)

        let priceSplit = window.location.pathname.split('/');
        productsPrice = parseInt(priceSplit[4]);
        deliveryPrice = parseInt(priceSplit[5]);
        totalPrice = productsPrice + deliveryPrice;

        inCart.map(productInCart => {
            let control = false;
            let quantity = '';
            let total_price = '';

            count.map(productCount => {
                if (productInCart.id === productCount.id) {
                    control = true;
                    quantity = productCount.value;
                    total_price = productCount.value * productInCart.price;
                }
            })
                if (control) {
                    products.push({
                        'id': productInCart.id,
                        'title': productInCart.title,
                        'quantity': quantity,
                        'price': productInCart.price,
                        'total_price': total_price,
                    })
                } else {
                    products.push({
                        'id': productInCart.id,
                        'title': productInCart.title,
                        'quantity': 1,
                        'price': productInCart.price,
                        'total_price': productInCart.price,
                    })
                }
        })

        lastOrder.map(field => {
            commandID = field.id + 1
        })

        if (checked) {
            fetch(apiUrl() + '/sales/orders/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    command_id: commandID,
                    first_name: firstName,
                    last_name: lastName,
                    telephone: telephone,
                    email: email,
                    country: country,
                    region: document.getElementById('region').value,
                    city: city,
                    address: address,
                    products: products,
                })
            })
            .then(res => res.text())
            .then(result => setOrder(result))
            .catch(error => console.log(error))

            fetch(apiUrl() + '/orderemail/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    products: products,
                    command_id: commandID,
                    first_name: firstName,
                    last_name: lastName,
                    telephone: telephone,
                    email: email,
                    country: country,
                    region: document.getElementById('region').value,
                    city: city,
                    address: address,
                    products_price: productsPrice,
                    delivery_price: deliveryPrice,
                    total_price: totalPrice,
                }),
            })
            // .then(res => res.text())
            // .then(result => setResultEmail(result))
            // .catch(error => console.log(error))

            dispatch(emptyCart());
            dispatch(decrementAll());
            dispatch(decrementProdAll());
        }
    }

    if (
        order.includes('id') &&
        order.includes('command_id') &&
        order.includes('first_name') &&
        order.includes('last_name') &&
        order.includes('telephone') &&
        order.includes('email') &&
        order.includes('region') &&
        order.includes('city') &&
        order.includes('address')
    ){
        // window.location.pathname = '/breadcrumb/CONFIRMARE/VINZARI/'
        return(
            <OrderConfirmation
                commandID={commandID}
                firstName={firstName}
                lastName={lastName}
                telephone={telephone}
                email={email}
                country={country}
                region={document.getElementById('region').value}
                city={city}
                address={address}
                productsPrice={productsPrice}
                deliveryPrice={deliveryPrice}
                totalPrice={totalPrice}
                products={products}
            />
        )
    } else {
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
                                // required
                                type='email'
                                placeholder='Introduceci email'
                                onChange={e => setEmail(e.target.value)}
                            />
                            {/* <Form.Control.Feedback type='invalid'>
                                Introduceti un email valid
                            </Form.Control.Feedback> */}
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col}>
                            <Form.Label>Tara</Form.Label>
                            <Form.Select 
                                required
                                defaultValue='Alegeti...'
                                onChange={e => setCountry(e.target.value)}
                            >
                                <option value='Republica Moldova'>Republica Moldova</option>
                                <option value='Romania'>Romania</option>
                            </Form.Select>
                            <Form.Control.Feedback type='invalid'>
                                Introduceti tara
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Raion/Judet</Form.Label>
                            {
                                country === 'Republica Moldova'
                                ?   <Form.Select 
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
                                :   <Form.Select
                                        required
                                        defaultValue='Alegeti...'
                                        id='region'
                                    >
                                        <option value='Alba'>Alba</option>
                                        <option value='Arad'>Arad</option>
                                        <option value='Arges'>Arges</option>
                                        <option value='Bacau'>Bacau</option>
                                        <option value='Bihor'>Bihor</option>
                                        <option value='Bistrita-Nasaud'>Bistrita-Nasaud</option>
                                        <option value='Botosani'>Botosani</option>
                                        <option value='Brasov'>Brasov</option>
                                        <option value='Braila'>Braila</option>
                                        <option value='Bucuresti'>Bucuresti</option>
                                        <option value='Buzau'>Buzau</option>
                                        <option value='Caras-Severin'>Caras-Severin</option>
                                        <option value='Calarasi'>Calarasi</option>
                                        <option value='Cluj'>Cluj</option>
                                        <option value='Constanta'>Constanta</option>
                                        <option value='Covasna'>Covasna</option>
                                        <option value='Dambovita'>Dambovita</option>
                                        <option value='Dolj'>Dolj</option>
                                        <option value='Galati'>Galati</option>
                                        <option value='Giurgiu'>Giurgiu</option>
                                        <option value='Gorj'>Gorj</option>
                                        <option value='Harghita'>Harghita</option>
                                        <option value='Hunedoara'>Hunedoara</option>
                                        <option value='Ialomita'>Ialomita</option>
                                        <option value='Iasi'>Iasi</option>
                                        <option value='Ilfov'>Ilfov</option>
                                        <option value='Maramures'>Maramures</option>
                                        <option value='Mehedinti'>Mehedinti</option>
                                        <option value='Mures'>Mures</option>
                                        <option value='Neamt'>Neamt</option>
                                        <option value='Olt'>Olt</option>
                                        <option value='Prahova'>Prahova</option>
                                        <option value='Satu Mare'>Satu Mare</option>
                                        <option value='Salaj'>Salaj</option>
                                        <option value='Sibiu'>Sibiu</option>
                                        <option value='Suceava'>Suceava</option>
                                        <option value='Teleorman'>Teleorman</option>
                                        <option value='Timis'>Timis</option>
                                        <option value='Tulcea'>Tulcea</option>
                                        <option value='Vaslui'>Vaslui</option>
                                        <option value='Valcea'>Valcea</option>
                                        <option value='Vrancea'>Vrancea</option>
                                    </Form.Select>
                            }
                            
                            
                            <Form.Control.Feedback type='invalid'>
                                Introduceti regiunee
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col}>
                            <Form.Label>Oras (alta localitate)</Form.Label>
                            <Form.Control
                                required
                                placeholder='oras sau alta localitate'
                                onChange={e => setCity(e.target.value)}
                            />
                            <Form.Control.Feedback type='invalid'>
                                Introduceti localitatea
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Adresa</Form.Label>
                            <Form.Control 
                                placeholder='str., nr. bloc/nr. apartament'
                                onChange={e => setAddress(e.target.value)}
                            />
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
                        // onClick={() => console.log(count)}
                    >
                        Trimiteti date
                    </Button>
                </Form>
            </div>
        )
    }
}