import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../context/DataProvider';
import { Link } from 'react-router-dom';



const Navbar = () => {

   const context  = useContext(DataContext);

   const loggedIn = JSON.parse(window.localStorage.getItem('login'))
   const user = JSON.parse(window.localStorage.getItem('user'))

   const {isLogin, url} = context

   const [userLogin, setUserLogin] = useState(isLogin);
   const [isLogin2, setIsLogin2] = useState();
   const [userData, setUserData] = useState({});


  const logOut = () => {
    localStorage.clear();
  }

  // console.log(isLogin2, 'asdf');
  // console.log(isLogin, 'qwe');


  


  // useEffect(() => {

  //   setUserData(JSON.parse(localStorage.getItem('user')));

  //   setUserLogin(loggedIn)

  //   console.log('1');

  // }, [])

  // useEffect(() => {

  //   console.log('2');
  //   setUserLogin(loggedIn)

  //   setUserData(JSON.parse(localStorage.getItem('user')));


  // }, [userLogin])

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
            
            loggedIn === true ?
              <li className="nav_profile">
                <div className="avatar">
                  <img src={`${url}/uploads/${user.avatar}`} />
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