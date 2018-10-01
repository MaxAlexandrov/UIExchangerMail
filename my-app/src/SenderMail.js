import React, { Component } from 'react';
import logo from './logo.svg';
import reg from './images/reg.png';
import key from './images/key.png';
import './App.css';

class Registration extends Component {
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
           <hr />
           <p className="App-login">
           <form action="http://localhost:8080/login/" method="post">
               <label> User Name : <input type="text" name="username"/> </label>
               <label> Password: <input type="password" name="password"/> </label>
               <button type="submit">Sign In</button>
           </form>
           </p>
           <p/>

           <p className="App-login">
             <form action="http://localhost:8080/login/" method="post">
                                     <label> User Name : <input type="text" name="username"/> </label>
                                     <label> Password: <input type="password" name="password"/> </label>
                                     <label> E-Mail : <input type="email" name="email"/> </label><br />
                                     <button type="submit">Registration</button>
             </form>
            </p>
            <hr />
            <p className="App-login">
            <h3>SEND MESSAGE:</h3>
                 <form method="post" action = "http://localhost:8080/user/send" >
                    <input type="email" name="email" placeholder="mail you friend" /><br />
                    <p><textarea name="textMessage" cols="40" rows="4" placeholder="You message..."></textarea></p><br />
                    <input type="typeM" name="typeM" placeholder="custom/normal" /><br />
                    <button type="submit">Send Message</button>
                 </form>
            </p>
         </div>
       );
     }
   }
export default Registration;
