import React, { useState, useEffect } from 'react'
import { Route, Link, Switch, useHistory } from "react-router-dom";
import './App.css';
import LoginForm from './components/loginForm'
import * as yup from 'yup';

function App() {
  const [signupUserName, setUserNameSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");


  return (
    <div className="App">
      <LoginForm setUserNameSignUp={setUserNameSignUp} setPasswordSignUp={setPasswordSignUp}></LoginForm>
    </div>
  );
}

export default App;
