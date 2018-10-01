import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import Registration from './Registration';
import SenderMail from './SenderMail';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
     <App />
        <Login
            headingName = "User Name"
            headingPassword = "Password"
            headingButton = "Sign In"
        />
        <Registration
           headingName = "User Name"
           headingPassword = "Password"
           headingEmail = "E-Mail"
           headingButton = "Registration"
        />
       <SenderMail
           headingText = "HTML"
           headingTagType = "h1"
           descriptionText = "Transforms into the DOM"
           descriptionTagType = "p"
       />
    </div>,
    document.getElementById('root'));
registerServiceWorker();
