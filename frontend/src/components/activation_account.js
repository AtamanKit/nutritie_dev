import { Button } from 'react-bootstrap';
import { apiUrl } from './utils';

export default function ActivationAccount() {
    const handleActivate = () => {
        const urlList = window.location.pathname.split('/');
        const uid = urlList[4];
        const token = urlList[5];

        fetch(apiUrl() + '/auth/users/activation/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                uid: uid,
                token: token,
            })
        })
        .then(res => res.json())
        .then(result => console.log(result))
        .catch(error => console.log(error));

        window.location.pathname = '/breadcrumb/REUSITA/CONTURI/'
    }

    return(
        <div
            style={{
                textAlign: 'center',
                margin: '10% 10% 10% 10%',
                color: 'rgb(80, 80, 80)',
            }}
        >
            <h1 className='activation-text'>
                ACTIVATI CONTUL APASIND BUTONUL:
            </h1>
            <Button 
                variant='success'
                className='activation-btn'
                onClick={handleActivate}
            >
                Activati
            </Button>
        </div>
    )
}