import React, { Component } from 'react';
import logo from './logo.svg';
import reg from './images/reg.png';
import key from './images/key.png';
import './App.css';

class App extends Component {
     render() {
       return (
         <div className="App">
           <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
             <h1 className="App-title">Welcome to Exchanger Mail System</h1>
           </header>
           <p className="App-intro">
             <a href="http://localhost:8080/registration">
             <img src={reg} className = "frond_page_icon" alt="registration"/></a>
             <a href="http://localhost:8080/user-room">
             <img src={key} className = "frond_page_icon" alt="user room"/></a>
           </p>

           <p className="App-login">
           <form action="http://localhost:8080/login/" method="post">
               <div><label> User Name : <input type="text" name="username"/> </label></div>
               <div><label> Password: <input type="password" name="password"/> </label></div>
               <div><input type="submit" value="Sign In"/></div>
           </form>
           </p>
         </div>
       );
     }
   }
export default App;
