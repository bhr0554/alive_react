import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'HyePark'
        }
        //console.log('constructor 호출');
    }

    static getDerivedStateFromProps(nexProps, prevState) {
        console.log("getDerivedStateFromProps 호출");
        console.log('--- state 값 변경 전 ---');
        console.log('nexProps', nexProps);
        console.log('prevState', prevState);
        prevState.name = nexProps.name;
        console.log('--- state 값 변경 후 ---');
        console.log('nexProps', nexProps);
        console.log('prevState', prevState);
        // return null;
    }

    render() {
        //console.log("render 호출");
        return <div>Hello, {this.state.name}</div>;
    }

    componentDidMount() {
        //console.log("componentDidMount 호출");
    }
}

function Welcomes() {
    return (
        <div>
            <Welcome name="q"/>
            <Welcome name="a"/>
        </div>
    );
}

ReactDOM.render(
    <Welcomes/>,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
