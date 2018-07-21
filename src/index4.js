import React from 'react';
import ReactDOM from 'react-dom';
// 函数的形式
function Hello(props){
    return <h2>我是函数声明的组件 :{props.name}</h2>
}

ReactDOM.render(
    <Hello name='itheima'/>,
    document.getElementById('root')
);
