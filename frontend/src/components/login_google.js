import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { Button } from 'react-bootstrap';

import { FcGoogle } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/auth/userSlice';

import { refreshTokenSetup, apiUrl } from './utils.js';

const clientId = '537614791430-jfsbnar7suuapta69j3im2hiqd2ncutl.apps.googleusercontent.com';

function LoginGoogle() {
    const dispatch = useDispatch();

    const onSuccess = (res) => {
        const user = JSON.parse(
            `{`+
            `"user_id": "${res.googleId}",`+
            `"first_name":"${res.profileObj.givenName}",`+
            `"last_name":"${res.profileObj.familyName}",`+
            `"email":"${res.profileObj.email}",`+
            `"image_url": "${res.profileObj.imageUrl}"`+
            `}`
        );

        dispatch(addUser(user));
        // refreshTokenSetup(res);

        window.location.reload();

        fetch(apiUrl() + `/accounts/usersocial/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                social_id: res.googleId,
                email: res.profileObj.email,
                first_name: res.profileObj.givenName,
                last_name: res.profileObj.familyName,
                social_from: "google",
            })
        })
    };

    const onFailure = (res) => {
        console.log('Login failed: res', res);
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedId: true,
        accessType: 'offline',
    });

    return (
        <Button 
            onClick={signIn}
            variant='success'
            style={{
                backgroundColor: 'white',
                color: 'gray',
                border: 'none',
                boxShadow: '3px 2px 10px 0 rgba(0, 0, 0, 0.2)',
                width: '70%',
                marginBottom: '.5rem',
            }}
        >
            <FcGoogle style={{margin: '0 .2rem .2rem 0'}}/>
                Google
        </Button>
    );
}

export default LoginGoogle;