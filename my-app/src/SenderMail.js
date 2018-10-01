import React, { Component } from 'react';
import './App.css';

class SenderMail extends Component {
     render() {
       return (
         <div className="App">
            <p className="App-login">
            <h3>SEND MESSAGE:</h3>
                 <form method="post" action = "http://localhost:8080/user/send" >
                   <label> E-Mail Send To: <input type="email" name="email" placeholder="mail you friend" /></label>
                   <label> Select Type Message: <select type="typeM" name="typeM" placeholder="custom/normal">
                   <option>custom</option>
                   <option>normal</option>
                   </select></label><br />
                    <p><textarea name="textMessage" cols="40" rows="4" placeholder="You message..."></textarea></p><br />
                    <button type="submit">Send Message</button>
                 </form>
            </p>
         </div>
       );
     }
   }
export default SenderMail;
