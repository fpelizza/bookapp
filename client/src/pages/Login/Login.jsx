import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../context'

const Login = () => {

    const navigate = useNavigate()
    const {setUserToken} = useGlobalContext()

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
            const response = await axios.post('http://server:8080/login',dataToPost, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })  
            console.log(response.status)
            
            if (response.status === 200){
                setUserToken(response.data.token)
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
            <h2>Login to Bookapp</h2>
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
                <button type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login