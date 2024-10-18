import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate=useNavigate();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  // onSignupSubmit
  //submit
  //final submit
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const nav = () => {
    if (user) {
      navigate('/profile', { state: { name: user.name, email: user.email } });
    } else {
      // Handle the case when user is not defined
      // You can show an error message or handle it according to your application logic
      console.error("User is not defined");
    }
  }
  
  

  return (
    <header className="header"  data-header style={{position:'fixed' }}>
      <div className="container">

        <a href="/" className="logo" onClick={()=>navigate('/')}>
          <img src="/images/anilearn2.png" style={{filter:'invert(100%)'}} width="232" height="50" alt="EduWeb logo" />
        </a>

        <nav className="navbar" data-navbar>

          <div className="wrapper">
            {/* <a href="#" className="logo">
              <img src="images/anilearn2.png" width="162" height="50" alt="EduWeb logo" />
            </a> */}

            <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list">
            <li className="navbar-item" style={{ color: 'black' }}>
              <a href="/" className="navbar-link" data-nav-link>Home</a>
            </li>

            <li className="navbar-item">
              <a href="/about" className="navbar-link" data-nav-link>About us</a>
            </li>

            <li className="navbar-item">
              <a href="/course" className="navbar-link" data-nav-link>Courses</a>
            </li>

            <li className="navbar-item">
              <a href="/videos" className="navbar-link" data-nav-link>Videos</a>
            </li>

            {/* {
              isAuthenticated ? <li className="navbar-item">
              <a href="/suggetion" className="navbar-link" data-nav-link>Send Suggetions</a>
            </li> : ""
            } */}

            <li className="navbar-item">
              <a href="/contact" className="navbar-link" data-nav-link>Contact</a>
            </li>

          </ul>

        </nav>

        <div className="header-actions">

          {/* <button className="header-action-btn" aria-label="toggle search" title="Search">
            <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
          </button> */}

          {/* <button className="header-action-btn" aria-label="cart" title="Cart">
            <ion-icon name="cart-outline" aria-hidden="true"></ion-icon>

            <span className="btn-badge">0</span>
          </button> */}



            {
              isAuthenticated ?  <div className="dropdown">
              <button className="dropdown-btn" onClick={toggleDropdown}>
                <img src='/images/user_profile_icon.png' alt='user_profile' width={'30px'} height={''}></img>
              </button>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <p style={{textAlign:'center'}}>Welcome, {user?.name}</p>
                  <a onClick={nav} style={{cursor:'pointer'}}>My Profile</a>
                  <a href="/" style={{cursor:'pointer'}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Sign Out</a>
                </div>
              )}
            </div> :<button style={{backgroundColor:'#1AB79D',paddingInline:'40px',paddingTop:'10px',paddingBottom:'10px',borderRadius:'10px',color:'white'}} onClick={() => loginWithRedirect()}>Try for free</button>
            }



            {/* {
              isAuthenticated ?  <div className="dropdown">
              <button className="dropdown-btn" onClick={toggleDropdown}>
                <img src='/images/user_profile_icon.png' alt='user_profile' width={'30px'} height={''}></img>
              </button>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <a href="/profile">My Profile</a>
                  <a href="/" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Sign Out</a>
                </div>
              )}
            </div> : <a href="/login" className="btn has-before">
            <span className="span">Try for free</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </a>
            } */}

            


          
          
          



        </div>
        <div className="overlay" data-nav-toggler data-overlay></div>

      </div>
    </header>
  );
};

export default Header;
