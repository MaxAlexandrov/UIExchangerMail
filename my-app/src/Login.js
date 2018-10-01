import React, { Component } from 'react';
import './App.css';

class Login extends Component {
     render() {
       return (
         <div className="App">
           <p className="App-login">
           <form action="http://localhost:8080/login/" method="post">
               <label> {this.props.headingName}: <input type="text" name="username"/> </label>
               <label> {this.props.headingPassword}: <input type="password" name="password"/> </label>
               <button type="submit">{this.props.headingButton}</button>
           </form>
           </p>
         </div>
       );
     }
   }
export default Login;