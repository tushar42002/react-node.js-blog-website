import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../context/DataProvider';
import { Link } from 'react-router-dom';



const Navbar = () => {

   const context  = useContext(DataContext);

   const {isLogin, url} = context

   const [userLogin, setUserLogin] = useState();
   const [userData, setUserData] = useState({});


  const logOut = () => {
    sessionStorage.clear();
  }

  useEffect(() => {
    
    setUserLogin(JSON.parse(sessionStorage.getItem('login')));

    setUserData(JSON.parse(sessionStorage.getItem('user')));
    
   

  }, [isLogin])
  

  return (

    <nav>
      <div className="container nav_container">
        <Link to="/" className="nav_logo">APNA BLOG</Link>
        <ul className="nav_items">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/service">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          {
            userLogin === true ?
              <li className="nav_profile">
                <div className="avatar">
                  <img src={`${url}/uploads/${userData.avatar}`} />
                </div>
                <ul>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li><a href='/' onClick={logOut}>Log out</a></li>
                </ul>
              </li>
              : <li><Link to="/login">login</Link></li>
          }

        </ul>
        <button id="open_nav-btn"><i className="fas fa-bars"></i></button>
        <button id="close_nav-btn"><i className="fas fa-multiply"></i></button>
      </div>
    </nav>
  )
}

export default Navbar