import React, { useState } from 'react';
import './App.css';
import fire from './config/Fire';
import { Route } from "react-router-dom";

import Login from "./components/Login"

function App() {

  const [user, setUser] = useState({user: {}});

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      // console.log(user)
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  }

  return (
    <div >
      <h3>StreakCount</h3>
      <Route path = "/Login" component={Login}/>
    </div>
  );
}

export default App;
