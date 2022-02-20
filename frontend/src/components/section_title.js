import { Card } from 'react-bootstrap';

export default function SectionTitle(props) {
    return (
        <Card className='prod-cat' ref={props._ref}>
            <Card.Body>
                <Card.Title>
                    <h2 className='produsele'>{props.first_title} </h2>
                    <h2 className='categorii'>{props.second_title}</h2>
                    <div className='card-line'/>
                </Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}