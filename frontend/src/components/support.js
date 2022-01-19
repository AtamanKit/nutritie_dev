import { Container, Row, Col } from 'react-bootstrap';
import { FaShippingFast } from 'react-icons/fa';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { MdHighQuality } from 'react-icons/md';

function SupportLent() {
    return(
        <div className='support-lent'>
            <Container>
                <Row>
                    <Col>
                        <div className='fa-content'>
                            <div className='fa-icon'>
                                <FaShippingFast />
                            </div>
                            <div>
                                <h3>Transport</h3>
                                <p>In toata tara</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='fa-content'>
                            <div className='fa-icon'>
                                <BsFillTelephoneForwardFill />
                            </div>
                            <div>
                                <h3>24/7 Suport</h3>
                                <p>Va ajutam cu drag</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='fa-content'>
                            <div className='fa-icon'>
                                <MdHighQuality />
                            </div>
                            <div>
                                <h3>Calitate garantata</h3>
                                <p>Pentru noi munca e placere</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SupportLent