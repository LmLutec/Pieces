import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {

  const response = await fetch("https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1")
  const json = await response.json()
console.log(json)

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Share pieces of you!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
