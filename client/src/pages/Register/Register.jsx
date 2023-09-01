import React, { useState } from 'react'
import '../Login/Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [mail, setMail] = useState('')

    const handleInputUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleInputPassword = (e) => {
        setPassword(e.target.value)
    }

    const handleInputMail = (e) => {
        setMail(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const dataToPost = {
                username: username,
                email: mail,
                password: password
            }
            const response = await axios.post('http://localhost:5000/register',dataToPost, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })  
            console.log(response.status)
            
            if (response.status === 200){
                navigate('/')
            } else {
                navigate('/login')
            }

        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className='app-container'>
            <div className='login-form'>
                <h2>Register to Bookapp</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Username:</label>
                        <input type='text' placeholder='Enter your username' onChange={handleInputUsername}/>
                    </div>
                    <div className='form-group'>
                        <label>Password:</label>
                        <input type='password' placeholder='Enter your password' onChange={handleInputPassword}/>
                    </div>
                    <div className='form-group'>
                        <label>Email:</label>
                        <input type='email' placeholder='Enter your mail' onChange={handleInputMail}/>
                    </div>
                    <button type='submit'>Register</button>
                </form>
            </div>
        </div>
  )
}

export default Register