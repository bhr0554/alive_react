import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginInButton(props) {
    return (
        <button onClick={props.onClickHandler}>
            LogIn
        </button>
    );
}

function LogOutButton(props) {
    return (
      <button onClick={props.onClickHandler}>
          LogOut
      </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogOutClick = this.handleLogOutClick.bind(this);
        this.state = {isLoggedin: false};
    }

    handleLoginClick() {
        this.setState({isLoggedin: true});
    }

    handleLogOutClick() {
        this.setState({isLoggedin: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedin;
        let button;
        if (isLoggedIn) {
            button = <LogOutButton onClickHandler={this.handleLogOutClick} />
        } else {
            button = <LoginInButton onClickHandler={this.handleLoginClick} />
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
