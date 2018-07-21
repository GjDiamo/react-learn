import React from 'react';
import ReactDOM from 'react-dom';
// 类的形式
 class HelloClass extends React.Component{
     render(){
         return <h2>我是类的声明组件：{this.props.name}</h2>
     }
 }
ReactDOM.render(
    <HelloClass name='郭海蛟'/>,
    document.getElementById('root')
);
