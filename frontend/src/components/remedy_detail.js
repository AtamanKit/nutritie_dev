import { Tooltip, OverlayTrigger, Card, CardGroup, Tabs, Tab, Button, Row, Col, Image } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import BreadProd from './bread_prod';
import SideList from './side_list';
import { quatesHtml, elementPath } from './utils'

const pathname = elementPath()

function RemedyDetail() {
    const [remedy, setRemedy] = useState([]);

    useEffect(() => {
        const url = `http://127.0.0.1:8000/nut_app/remedies/${pathname.id}`;

        const fetchData = async() => {
            try {
                const result = await fetch(url);
                const json = await result.json();
                setRemedy(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [])

    return(
        <React.Fragment>
            <Row xs={1} md={2} className='rem-detail'>
                <Col>
                {/* <div className='text-center'> */}
                <Card style={{border: 'none'}}>
                    <Image
                        src={remedy.image_desc}
                        className='img-thumbnail'
                        style={{maxWidth: '50rem'}}
                        alt='...' 
                    />
                </Card>
                    <h5
                        style={{
                            maxWidth: '50rem',
                            paddingLeft: '0.5rem',
                            paddingTop: '3rem',
                            paddingBottom: '0.5rem',
                        }}
                    >
                        {remedy.title}
                    </h5>
                    <div 
                        style={{
                            maxWidth: '50rem',
                            paddingLeft: '0.5rem',
                            paddingBottom: '1rem',
                        }}
                        dangerouslySetInnerHTML={quatesHtml(remedy.text)}
                    />
                </Col>
                <Col>
                    <SideList 
                        list='articlelasts'
                        header='ULTIMELE ARTICOLE'
                        namespace='ARTICOL'
                    />
                    <SideList
                        list='categories'
                        header='CATEGORII DE PRODUSE'
                        namespace='PRODUSE'
                    />
                    <SideList
                        list='brands'
                        header='PRODUCATORI'
                        namespace='PRODUSE'
                    />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default RemedyDetail