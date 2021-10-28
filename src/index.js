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

/*const name = 'HyeRyeon';
const element = <h1>Hello, {name}</h1>;
ReactDOM.render(
    element,
    document.getElementById('root')
);*/

/*function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName : 'Hye',
    lastName : 'Park'
}

const element = (
    <h1>Hello, {formatName(user)}</h1>
);*/

/** **attr에 따옴표 || '{}'중괄호를 사용해야 함. */
/* attr에 따옴표를 이용하여 문자열 정의 가능 */
//const element = <div tabIndex="0"></div>;

/* attr에 '{}'를 이용하여 JavaScript 표현식 삽입 가능 */
//const element = <img src={user.avatarUrl}></img>;

/**
 * JSX 표현식은 HTML보다 JavaScript에 가깝기 때문에 HTML attr 이름 대신 camelCase 명명 규칙을 사용함.
 * ex) class="~" 이 아니라 className="~"
 * */

/** Babel은 React.createElement() 호출로 하여금 컴파일 진행 */
/*const element = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);*/
/** 위 아래는 동일 함. */
const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);

// React.createElement() 함수는 몇 가지 검사를 수행하여 버그가 없는 코드를 작성하는 데 도움을 주고, 아래와 같은 객체를 생성함.
/*
const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }
};
*/
/** **React는 위 객체를 읽어 DOM을 구성함. */

ReactDOM.render(
    element,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
