import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import NumberList from "./component/Sample";

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'textarea 내용입니다.'}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value:event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('value', this.state.value);
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
              <textarea value={this.state.value} onChange={this.handleChange}/>
              <input type="submit" value="확인" />
          </form>
        );
    }
}

ReactDOM.render(
    <FlavorForm/>,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
