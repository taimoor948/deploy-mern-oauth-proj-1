import React from 'react'
import "./login.css"

const Login = () => {

    const loginwithgoogle = ()=>{
        window.open("https://deploy-mern-oauth-proj-1.vercel.app/auth/google/callback","_self")
    }
  return (
    <>
        <div className="login-page">
            <h1 style={{textAlign:"center"}}>Login</h1>
            <div className="form">
                <form className='login-form'>
                    <input type="text" name="" id="" placeholder='username' />
                    <input type="password" name="" id="" placeholder='password'  />
                    <button>Login</button>
                    <p className='message'>Not Registerd? <a href="#">Create an account</a></p>
                </form>
                <button className='login-with-google-btn' onClick={loginwithgoogle}>
                    Sign In With Google
                </button>
            </div>
        </div>
    </>
  )
}

export default Login
