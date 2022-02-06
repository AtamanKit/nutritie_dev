import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import RemedyDetail from './remedy_detail';
import { FiChevronsRight } from 'react-icons/fi'

function SideList(props) {
    const[list, setList] = useState([]);

    useEffect(() => {
        const url = `http://127.0.0.1:8000/nut_app/${props.list}/`;

        const fetchData = async() => {
            try {
                const result = await fetch(url);
                const json = await result.json();
                setList(json);
            } catch(error) {
                console.log('error', error);
            }
        };

        fetchData();
    }, [])

    return(
        <React.Fragment>
            <h4 style={{color: '#94b237'}}>
                {props.header}
            </h4>
            <ul>
                {
                    list.map(element => 
                        <li style={{listStyleType: 'none'}}>
                            <FiChevronsRight/> {element.title}
                        </li>
                    )
                }
            </ul>
            <div style={{
                backgroundColor: '#94b237',
                height: '2px',
                marginBottom: '2rem',
                marginRight: '3rem',
            }}/>
                
        </React.Fragment>
    )
}

export default SideList
