import React from 'react';
import ReactDOM from 'react-dom';
// 类的形式
class App extends React.Component{
    handelClick(){
        alert("点我点我")
    }
    render(){
        return(
            <button onClick={this.handelClick}>按钮</button>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
