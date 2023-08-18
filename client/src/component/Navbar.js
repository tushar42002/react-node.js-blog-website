import React from 'react'

const Navbar = () => {

  const logOut = () => {
    sessionStorage.clear();
  }

  return (

    <nav>
      <div className="container nav_container">
        <a href="/" className="nav_logo">APNA BLOG</a>
        <ul className="nav_items">
          <li><a href="/">Home</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/service">Services</a></li>
          <li><a href="/contact">Contact</a></li>

          {
            // sessionStorage.getItem(userLogin) == true ?
            <li className="nav_profile">
              <div className="avatar">
                <img src="'. ROOT_URL .'images/'. $user_image .'" />
              </div>
              <ul>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="" onClick={logOut}>Log out</a></li>
              </ul>
            </li>
            // : <li><a href="/signin.php">Signin</a></li>
          }

        </ul>
        <button id="open_nav-btn"><i className="fas fa-bars"></i></button>
        <button id="close_nav-btn"><i className="fas fa-multiply"></i></button>
      </div>
    </nav>
  )
}

export default Navbar