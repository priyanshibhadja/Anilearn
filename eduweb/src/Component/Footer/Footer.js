import React from 'react'
import './Footer.css'

function Footer  () {
  return (
    <>
      <footer class="footer" style={{backgroundImage: "images/footer-bg.png"}}>

<div class="footer-top section">
  <div class="container grid-list">

    <div class="footer-brand">

      <a href="#" class="logo">
        <img src="/images/anilearn.png" width="272" height="50" alt="EduWeb logo"/>
      </a>

      <p class="footer-brand-text">
      Animation Meets Education. Embrace the future of learning, where educators weave magic into lessons, and students thrive in an immersive visual learning environment.
      </p>

     

      <div class="wrapper">
        <span class="span">Call:</span>

        <a href="" class="footer-link">9265624142
        </a>
      </div>

      <div class="wrapper">
        <span class="span">Email:</span>

        <a href="mailto:info@eduweb.com" class="footer-link">anilearn@eduweb.com</a>
      </div>

    </div>

    <ul class="footer-list">

      <li>
        <p class="footer-list-title">Quick Links</p>
      </li>

      <li>
        <a href="/about" class="footer-link">About</a>
      </li>

      <li>
        <a href="/course" class="footer-link">Courses</a>
      </li>

      <li>
        <a href="https://dev-gpoz1h4sm8td85xv.us.auth0.com/login?state=hKFo2SB4aGFwNE5zcnZiY3hqWFFickZObFZEUWdDZkdfODhKcqFupWxvZ2luo3RpZNkgN2NrWURpdTFfWmxOLU5jc1d1Sm1kUVhBczE2Q3U0b2GjY2lk2SAzMlI3bU1Sck51VnowWm5uWWRYdjdwbnpka3RVRnNNRw&client=32R7mMRrNuVz0ZnnYdXv7pnzdktUFsMG&protocol=oauth2&scope=openid%20profile%20email&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code&response_mode=query&nonce=UlFGR1drQlNxbnJuN2NaME1tTUdkM0FBT09ockFWN1VPTzhMV1BERG5FTQ%3D%3D&code_challenge=60nYpVFL14LqRVuaPtNvfCTsYH0qrKAiMnsCxFj25A4&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMi4yLjQifQ%3D%3D" class="footer-link">Login / SignUp</a>
      </li>

      {/* <li>
        <a href="#" class="footer-link">Events</a>
      </li> */}

      {/* <li>
        <a href="#" class="footer-link">Instructor Profile</a>
      </li> */}

      {/* <li>
        <a href="#" class="footer-link">Purchase Guide</a>
      </li> */}

    </ul>

    <ul class="footer-list">

      <li>
        <p class="footer-list-title">Connect with us</p>
      </li>


      <li>
        <a href="#" class="footer-link">Instagram</a>
      </li>

      <li>
        <a href="#" class="footer-link">LinkedIn</a>
      </li>
      
      <li>
        <a href="#" class="footer-link">Facebook</a>
      </li>

    </ul>

    <div class="footer-list">

      <p class="footer-list-title">Send your suggestion</p>

      {/* <p class="footer-list-text">
        Send your suggestion
      </p> */}

      {/* <form action="" class="newsletter-form">
        <input type="text" name="email_address" placeholder="Your suggestion" required class="input-field"/>

        <button type="submit" class="btn has-before">
          <span class="span">Send</span>

          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </button>
      </form> */}

      <ul>
      <li>
        <a href="mailto:kavanbakori111@gmail.com" class="footer-link">Gmail</a>
      </li>
      </ul>

      {/* <ul class="social-list">

        <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-mail"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-discord"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>

         <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </li> 

      </ul> */}

    </div>

  </div>
</div>

<div class="footer-bottom">
  <div class="container">

    <p class="copyright">
      Copyright 2024 All Rights Reserved by <a href="#" class="copyright-link">Anilearn</a>
    </p>

  </div>
</div>

</footer>
    </>
  )
}

export default  Footer;
