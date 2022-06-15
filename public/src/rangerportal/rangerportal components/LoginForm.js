import React, { useState } from 'react';
import "./LoginForm.css";


function LoginForm({ Login, error }) {
  
    const [details, setDetails] = useState({username:"", password: ""});

    const handleSubmit = e => {
        e.preventDefault();

        Login(details);
    }
  
    return (
    <form onSubmit={handleSubmit}>
        <div className='formInner'>
            <h2>Login</h2>
            {(error !== "") ? (<div className='error'>{error}</div>) : ""}
            <div className='formGroup'>
                <label htmlFor='username'>Username </label>
                <input type='text' name='username' id='username' onChange={e => setDetails({...details, username: e.target.value})}
                 value={details.username}/>
            </div>
            <div className='formGroup'>
                <label htmlFor='password'>Password </label>
                <input type='password' name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})}
                 value={details.password}/>
            </div>
            <input type='submit' id='submit' value="Login"/>
        </div>
    </form>
  )
}

export default LoginForm;