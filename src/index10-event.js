//react开发使用
import React from 'react';
//浏览器渲染使用
import ReactDOM from 'react-dom';
// 类的形式
class App extends React.Component{

    handleClick(){
        alert("按钮被点击")
        console.log("按钮被点")
    }
    //onClick接受的是一个函数
    render(){
        return(
            <button onClick={this.handleClick}>按钮</button>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
