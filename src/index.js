import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function LoginInButton(props) {
    return (
        <button>
            LogIn
        </button>
    );
}

function LogOutButton(props) {
    return (
        <button>
            LogOut
        </button>
    );
}

function Sample(props) {
    const unreadMessages = props.unreadMessages;

    return (
      <div>
          <h1>Hello!</h1>
          {unreadMessages.length > 0
              ? <LoginInButton />
              : <LogOutButton />
          }
      </div>
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
    <Sample unreadMessages={messages} />
    , document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
