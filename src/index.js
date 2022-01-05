import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import MultiInput from "./component/MultiInput";
import App1 from "./component/App1";

const account = [{q : '카드 결제'}
    ,{q : '현금 결제'}];
const ctg = [
    {
        q : '양식'
        ,a : [
            {
                q : '리조또'
                ,a : account
            }
            ,{
                q : '파스타'
                ,a : account
            }
        ]
    }
    ,{
        q : '중식'
        ,a : [
            {
                q : '짜장'
                ,a : account
            }
            ,{
                q : '짬뽕'
                ,a : account
            }
            ,{
                q : '볶음밥'
                ,a : account
            }
        ]
    }
    ,{
        q : '한식'
        ,a : [
            {
                q : '김치찌개'
                ,a : account
            }
            ,{
                q : '갈비찜'
                ,a : account
            }
            ,{
                q : '비빔밥'
                ,a : account
            }
        ]
    }
];

ReactDOM.render(
    <App1 ctg={ctg}/>,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
