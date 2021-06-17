import React, { useState, useEffect } from 'react'
import { Route, Link, Switch, useHistory } from "react-router-dom";
import './App.css';
import LoginForm from './components/loginForm'
import Home from "./components/home"
import * as yup from 'yup';

function App() {
  const [signupUserName, setUserNameSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");


  return (<div className="App">
    <h1>Water My Plants</h1>
    <nav>
      <p><Link to='/'>HOME</Link></p>
      <p><Link id="login-form" to='/login-form'>Login/ Sign Up</Link></p>
    </nav>
    <switch>
      <Home></Home>
      <LoginForm setUserNameSignUp={setUserNameSignUp} setPasswordSignUp={setPasswordSignUp}></LoginForm>
    </switch>
  </div>
  );
}

export default App;
