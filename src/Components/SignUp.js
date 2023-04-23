import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/")
        }
    }, [])

    const collectData = async () => {
        console.warn( email, password);
        let result = await fetch("http://localhost:5000/register", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json()
        console.log(result)
        if (result.auth) {
            // localStorage.setItem('user', JSON.stringify(result.user));
            // localStorage.setItem('token', JSON.stringify(result.auth));
            navigate("/")
        }
        
    }




    return (
        <div className='register'>
            <h1>Register</h1>

            {/* <input type='text' className='inputBox' placeholder='username'
                onChange={(e) => setName(e.target.value)} value={name} /> */}

            <input type='text' className='inputBox' placeholder='username'
                onChange={(e) => setEmail(e.target.value)} value={email} />

            <input type='password' className='inputBox' placeholder='pasword'
                onChange={(e) => setPassword(e.target.value)} value={password} />

            <Link to="/login"><button onClick={collectData} className="appButton" type="button"> SignUp</button></Link>



        </div>
    )
}

export default SignUp