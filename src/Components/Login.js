import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            // navigate("")
        }
    }, [])

    const handleLogin = async () => {
        let result = await fetch("http://localhost:5000/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json()
        console.log(result)
        if (result.auth) {
            localStorage.setItem('user', JSON.stringify(result.user));
            localStorage.setItem('token', JSON.stringify(result.auth));
            navigate("/")
        }
        else {
            alert("please enter correct details")
        }
    }




    return (
        <div className='login'>
            <h1>Member Login</h1>
            <input type='text' className='inputBox' placeholder='username'
                onChange={(e) => setEmail(e.target.value)} value={email} />

            <input type='password' className='inputBox' placeholder='password'
                onChange={(e) => setPassword(e.target.value)} value={password} />

            <Link to="booklist"><button onClick={handleLogin} className="appButton" type="button">Login</button></Link>



        </div>
    )
}

export default Login