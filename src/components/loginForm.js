import React from 'react';
import styled from 'styled-components'

export default function LogInForm({ setUserNameSignUp, setPasswordSignUp }) {
  const Button = styled.button`
  background: ${props => props.login ? "white" : "green"};
  color: ${props => props.login ? "green" : "white"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid gray;
  border-radius: 3px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

  const FormSection = styled.section`
  background: "white";
  color: black;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: .8em;
  margin: 1.5em;
  padding: .5em
  border: 4px solid gray;
  ${'' /* border-radius: 25%; */}
`;


  return (<div>
    <FormSection>
      <h1>LOGIN</h1>
      <label>Username:<input onChange={(e) => { setUserNameSignUp(e.target.value) }} type="text" placeholder="create a username"></input></label>
      <label>Password:<input onChange={(e) => { setPasswordSignUp(e.target.value) }} type="password" placeholder="type your password"></input></label>
      <Button login>Login Now</Button>
    </FormSection>
    <FormSection>
      <h1>Create and Account</h1>
      <label>Username:<input type="text" placeholder="create a username"></input></label>
      <label>Password:<input type="password" placeholder="type your password"></input></label>
      <Button signUp>Sign Me Up</Button>
    </FormSection>
  </div>)
}