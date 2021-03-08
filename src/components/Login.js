import React from 'react';
import { loginUrl } from '../spotify';

function Login() {

    return (
        <div className="Login">
            <a href={loginUrl}>LOG IN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;