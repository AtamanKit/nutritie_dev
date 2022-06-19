import React from 'react';
import FacebookLogin from 'react-facebook-login';

import { useDispatch } from 'react-redux';
import { addUser } from '../features/auth/userSlice';

import { apiUrl } from './utils';

export default function LoginFacebook() {
    const dispatch = useDispatch();

    const responseFacebook = (response) => {
        const name_split = response.name.split(' ');
        const givenName = name_split[0];
        const familyName = name_split[1];

        const user = JSON.parse(
            `{`+
            `"user_id": "${response.userID}",`+
            `"first_name": "${givenName}",`+
            `"last_name": "${familyName}",`+
            `"email": "${response.email}",`+
            `"image_url": "${response.picture.data.url}"`+
            `}`
        )

        dispatch(addUser(user))

        fetch(apiUrl() + '/accounts/usersocial/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                social_id: response.userID,
                email: response.email,
                first_name: givenName,
                last_name: familyName,
                social_from: "facebook",
            })
        })
    }

    return(
        <FacebookLogin
            appId='713083976521884'
            textButton='Facebook'
            autoLoad={false}
            fields='name,email,picture'
            callback={responseFacebook}
            cssClass='facebook_btn'
        />
    )
}