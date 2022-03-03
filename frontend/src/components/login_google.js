import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { Button } from 'react-bootstrap';

import { FcGoogle } from 'react-icons/fc';

import { refreshTokenSetup } from './utils.js';

const clientId = '537614791430-jfsbnar7suuapta69j3im2hiqd2ncutl.apps.googleusercontent.com';

function LoginGoogle() {
    const onSuccess = (res) => {
        console.log('Login Success: cuttentUser:', res.profileObj);
        refreshTokenSetup(res);
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
        <Button onClick={signIn}>
            <FcGoogle style={{margin: '0 .2rem .2rem 0'}}/>
            Logati-va cu Google
        </Button>
    );
}

export default LoginGoogle;