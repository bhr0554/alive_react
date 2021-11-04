import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

/** 함수형 컴포넌트 */
/*function Welcome(props) {
    return <div>Hello, {props.name}</div>;
}*/
class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name : 'HyePark'}
    }

    render() {
        return <div>Hello, {this.state.name}</div>;
    }
}

function Welcomes() {
    return (
        <div>
            <Welcome name="q"/>
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
