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

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps 호출");
        debugger;
        return null;
    }

    // 확인 못 함. 아마도 setState를 사용하여 확인 가능한 듯.
    shouldComponentUpdate(nextprops, nextState) {
        console.log("sholudComponetUpdate 호출")
        console.log(nextprops, nextState);
        debugger;
        return nextprops != nextState;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate 호출")
        debugger;
        return null;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate 호출");
        debugger;
    }

    render() {
        console.log("render 호출");
        debugger;
        return <div>Hello, {this.state.name}</div>;
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
