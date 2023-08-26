import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/DataProvider';
import { Link } from 'react-router-dom';

const Signup = () => {

  const context  = useContext(DataContext);

  const { signup } = context;

  const [signupData, setSignupData] = useState({});

  

  const OnChange =(e) =>{
    setSignupData({...signupData,[e.target.name]: e.target.value})
  }

const onImage = (e) => {

  setSignupData({...signupData,image:e.target.files[0]});

}

  const signupHandle = (e) => {

    e.preventDefault();

    // console.log(signupData);
    // console.log(Object.keys(signupData).length);

    if (signupData.password === signupData.cpassword || Object.keys(signupData).length === 6) {
      signup(signupData)
    }

  }

  return (
    <section className="form_section">
      <div className="container form_container">
        <h2>Sign Up</h2>
        <div className="alert_message error">
          <p>some error</p>
        </div>
        <form action='' encType="multipart/form-data" method="POST">
          <input type="text" name="firstname"  placeholder="First Name" onChange={(e)=>OnChange(e)}/>
          <input type="text" name="lastname" placeholder="last Name" onChange={(e)=>OnChange(e)}/>
          <input type="email" name="email"  placeholder="Email" onChange={(e)=>OnChange(e)}/>
          <input type="password" name="password" placeholder="Create password" onChange={(e)=>OnChange(e)}/>
          <input type="password" name="cpassword" placeholder="Confirm password" onChange={(e)=>OnChange(e)}/>
          <div className="form_control">
            <label htmlFor="User Avatar"></label>
            <input type="file" name="image" id="avatar" onChange={(e)=>onImage(e)}/>
          </div>
          <button name="submit" className="btn" onClick={(e)=>signupHandle(e)} >Sign Up</button>
          <small>Alredy have an account? <Link to="/login">Log In</Link></small>
        </form>
      </div>
    </section>
  )
}

export default Signup