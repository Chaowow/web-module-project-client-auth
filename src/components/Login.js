import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [cred, setCred] = useState({
        username: '',
        password: ''
    });

    const handleChnage = e => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post(`http://localhost:9000/api/login`, cred)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            navigate('/friends')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
    <div>
      <h2>Login</h2>
  
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input onChange={handleChnage} name='username' id='username'/>
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input onChange={handleChnage} name='password' type='password' id='password'/>
        </div>
        <button>LOGIN</button>
      </form>
    </div>
    );
}

export default Login;