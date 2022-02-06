import { Tooltip, OverlayTrigger, Card, CardGroup, Tabs, Tab, Button, Row, Col, Image } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import BreadProd from './bread_prod';
import SideList from './side_list';
import { quatesHtml } from './quates_html';

function RemedyId(){
    const url_split = window.location.pathname.split('/remediu%20detaliat/')
    const product_id = url_split[1]

    return product_id
}

// function quatesHtml(quates) {
//     return {__html: quates};
// }

function RemedyDetail() {
    const [remedy, setRemedy] = useState([]);

    useEffect(() => {
        const url = `http://127.0.0.1:8000/nut_app/remedies/${RemedyId()}`;

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
            <BreadProd 
                upGreen='VEDETI SECTIUNEA'
                downWhite='REMEDIUL ALES'
            />
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
                        list='remedies'
                        header='ULTIMELE ARTICOLE'
                    />
                    <SideList
                        list='categories'
                        header='CATEGORII DE PRODUSE'
                    />
                    <SideList
                        list='brands'
                        header='PRODUCATORI'
                    />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default RemedyDetail