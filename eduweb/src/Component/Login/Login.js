import React, {useState} from "react";
import * as Components from './Component';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import './Login.css';
function Login() {
    const navigate=useNavigate();
    const [signIn, toggle] = React.useState(true);
    const [form, setForm] = useState({});
    const [lemail, setlEmail] = useState('');
    const [lrole, setlRole] = useState('');
    const [lpassword, setlPassword] = useState('');

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    const handlesignup = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
      
        // Basic form validation
        if (!form.name || !form.email || !form.password || !form.role) {
          alert("Please fill in all fields.");
          return;
        }
      
        // Password validation (e.g., minimum length)
        if (form.password.length < 6) {
          alert("Password must be at least 6 characters long.");
          return;
        }

        try {
            const signup = await fetch('http://localhost:3002/signup', {
              method: 'POST',
              body: JSON.stringify(form),
              headers: {
                'Content-Type': 'application/json' 
              }
            });
          
            console.log("Signup response:", signup); // Add this line for debugging
          
            if (signup.data.success) {
              alert("Welcome to AniLearn");
              navigate("/");
            } else {
              console.error("Signup failed:", signup.status, signup.statusText); // Add this line for debugging
              alert("Failed to sign up. Please try again later.");
            }
          } catch (error) {
            alert("Start journey with AniLearn");
              navigate("/");
          }
      }

      const handlelogin = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
      
        // Basic form validation
        if (!lemail || !lpassword || !lrole) {
          alert("Please fill in all fields.");
          return;
        }
      
        // Password validation (e.g., minimum length)

        try {
            const login = await fetch('http://localhost:3002/login', {
              method: 'POST',
              body: JSON.stringify({ lemail, lpassword, lrole }),
              headers: {
                'Content-Type': 'application/json' 
              }
            });
          
            console.log("login response:", login); // Add this line for debugging
          
            if (login.ok) {
              alert("Welcome to AniLearn");
              navigate("/");
            } else {
              console.error("Login failed:", login.status, login.statusText); // Add this line for debugging
              alert("Failed to sign up. Please try again later.");
            }
          } catch (error) {
            console.error("Error signing up:", error);
            alert("An error occurred. Please try again later.");
          }
      }
      
    

    return (
        <>
            <div className="logincomponent">
                <Components.Container>
                    <Components.SignUpContainer signinIn={signIn}>
                        <Components.Form>
                            <Components.Title>Create Account</Components.Title>
                            <Components.Input type='text' onChange={handleForm} name="name"  placeholder='Name' />
                            <Components.Input type='email' onChange={handleForm} name="email" placeholder='Email' />
                            <Components.Input type='password' onChange={handleForm} name="password" placeholder='Password' />
                            <Components.Input type='role' onChange={handleForm} name="role" placeholder='Student/Educator/Admin' />
                            <Components.Button onClick={handlesignup}>Sign Up</Components.Button>
                        </Components.Form>
                    </Components.SignUpContainer>

                    <Components.SignInContainer signinIn={signIn}>
                        <Components.Form>
                            <Components.Title>Sign in</Components.Title>
                            <Components.Input type='email' onChange={(e) => {setlEmail(e.target.value)}} placeholder='Email' />
                            <Components.Input type='password' onChange={(e) => {setlPassword(e.target.value)}} placeholder='Password' />
                            <Components.Input type='role' onChange={(e) => {setlRole(e.target.value)}} name="role" placeholder='Student/Educator/Admin' />
                            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                            <Components.Button onClick={handlelogin}>Sign In</Components.Button>
                        </Components.Form>
                    </Components.SignInContainer>

                    <Components.OverlayContainer signinIn={signIn}>
                        <Components.Overlay signinIn={signIn}>

                            <Components.LeftOverlayPanel signinIn={signIn}>
                                <Components.Title>Welcome Back!</Components.Title>
                                <Components.Paragraph>
                                    To keep connected with us please login with your personal info
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => {toggle(true)}}>
                                    Sign In
                                </Components.GhostButton>
                            </Components.LeftOverlayPanel>

                            <Components.RightOverlayPanel signinIn={signIn}>
                                <Components.Title>Hello, Friend!</Components.Title>
                                <Components.Paragraph>
                                    Enter Your personal details and start journey with us
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(false)}>
                                    Sign Up
                                </Components.GhostButton>
                            </Components.RightOverlayPanel>
                        </Components.Overlay>
                    </Components.OverlayContainer>
                </Components.Container>
            </div>
        </>
    )
}

export default Login;