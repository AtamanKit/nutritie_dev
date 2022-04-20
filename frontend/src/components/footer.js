import { Container, Row, Col, Button } from 'react-bootstrap';
import { IoLogoWhatsapp } from 'react-icons/io';

function Footer(props) {
    return (
        <div className='footer' ref={props.footRef}>
            <Container>
                <Row>
                    <Col>
                        <div className='footer-title'>
                            <h3>DESPRE</h3>
                            <p>Pe acest site puteti gasi
                                atit informatie cu privire la 
                                diferite afectiuni alergice, 
                                intoleranta la histamina, remedii si 
                                sfaturi cu privire la ameliorarea si
                                vindecarea lor, cit si produse
                                naturiste pe care le puteti folosi
                                pentru vindecare.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className='footer-title'>
                            <h3>CONTACTE</h3>
                            <p>GSM: +373 69858126</p>
                            <p>
                                WhatsApp: 
                                    <a 
                                        href='https://api.whatsapp.com/send?phone=37369858126&app=facebook&entry_point=page_cta&fbclid=IwAR0__KTvHmiGu7S6ajm3-9ASPCEY7wChTf5xWLQEbAMlSfWWzhv3-5yxe7U'
                                        className='whats-btn'
                                    >
                                        <IoLogoWhatsapp/>
                                    </a>
                            </p>
                            <p>La fel ne puteti gasi pe:</p>
                            <Button
                                variant='success' 
                                className='face-btn'
                                href='https://www.facebook.com/Atamaniuc-Cristina-Tehnician-nutri%C8%9Bionist-103680757838692'
                            >
                                Facebook
                            </Button>
                        </div>
                    </Col>
                    <Col>
                        <div className='footer-title'>
                            <h3>MENU</h3>
                            <ul>
                                <li><a href='/' onClick={props.footHome} className='footer-home-link'>Home</a></li>
                                <li><a onClick={props.footRem}>Remedii</a></li>
                                <li><a onClick={props.footCat}>Produse pe categorii</a></li>
                                <li><a href='/breadcrumb/PRODUSE/TOATE%20PRODUSELE/' className='footer-home-link'>Toate produsele</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer