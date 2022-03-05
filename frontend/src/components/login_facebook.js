import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

export default function LoginFacebook() {
    const [picture, setPicture] = useState('');

    // const componentClicked = (response) => {
    //     console.log('response.accessToken')
    // }

    const responseFacebook = (response) => {
        // setPicture(response.picture.data.url)
        console.log(response);
        // console.log(response.picture)
    }

    return(
        <FacebookLogin
            appId='713083976521884'
            autoLoad={false}
            fields='name,email,picture'
            callback={responseFacebook}
            cssClass='facebook_btn'
        />
    )
}