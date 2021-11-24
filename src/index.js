import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import NumberList from "./component/Sample";

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ['coconut']}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log('selectedOptions', event.target.selectedOptions);

        let values = Array.from(
            event.target.selectedOptions,
            ( option => option.value)
        );
        this.setState({value: values});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('value', this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <select multiple={true} value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">포도</option>
                    <option value="coconut">코코넛</option>
                    <option value="banana">바나나</option>
                </select>
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
