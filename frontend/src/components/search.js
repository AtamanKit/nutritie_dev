import { Tooltip, OverlayTrigger, Card, Button, Row, Col, Figure } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { CountText }  from './count_text';
import { spacePath, elementPath, apiUrl } from './utils';

const pathname = elementPath()

function Search(props) {
    const [searches, setSearches] = useState([]);

    useEffect(() => {

        const url = apiUrl() + `/nut_app/${props.table}/?search=${spacePath(pathname.id)}`

        const fetchData = async() => {
            try {
                const result = await fetch(url);
                const json = await result.json();
                setSearches(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [])

    if (searches.length !== 0) {
        return(
            <React.Fragment>
                {
                    searches.map(search => {
                        console.log(search)
                        return(
                            <React.Fragment>
                                <a href={`/breadcrumb/${props.type}/${search.category.title}/${search.id}`}> 
                                    <Figure style={{padding: '2rem 1rem 0 1rem'}}>
                                        <Figure.Image
                                            width={171}
                                            height={180}
                                            alt='171x180'
                                            src={search.image_desc}
                                        />
                                        <Figure.Caption>
                                            <h1>{search.title}</h1>
                                            {
                                                search.description
                                                ?   CountText(search.description, 500)
                                                :   CountText(search.text, 500)
                                            }
                                            
                                        </Figure.Caption>
                                    </Figure>
                                </a> 
                                <br/>
                            </React.Fragment>
                    )})
                }
            </React.Fragment>
        )
    } else {
        return <div style={{padding: '10rem 0 10rem 0', textAlign: 'center'}}><h1>Nici un rezultat!</h1></div>
    }
}

export default Search