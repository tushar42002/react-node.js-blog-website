import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';


const Login = () => {


  const context = useContext(DataContext);

  const { login } = context;

  const [loginData, setLoginData] = useState({});

  const OnChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  const loginHandle = (e) => {
    e.preventDefault();

    login(loginData)

  }



  return (
    <section className="form_section">
      <div className="container form_container">

        <h2>Log In</h2>
        <div className="alert_message success">
          <p>login sucess</p>
        </div> <div className="alert_message error">
          <p>some error</p>
        </div>
        <form method="POST">
          <input type="text" name="email" placeholder="Email" onChange={(e) => OnChange(e)} />
          <input type="password" name="password" placeholder="password" onChange={(e) => OnChange(e)} />
          <input type="submit" className="btn" onClick={(e) => loginHandle(e)} value="sign in" />
          <small>Create New account? <Link to="/signup">Sign up</Link></small>
        </form>
      </div>


    </section>
  )
}

export default Login