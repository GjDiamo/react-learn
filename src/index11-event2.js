//react开发使用
import React from 'react';
//浏览器渲染使用
import ReactDOM from 'react-dom';
// 类的形式
class App extends React.Component{
 constructor(props){
     super(props);
     this.state={
         count:0
     }
 };
    handleClick=()=>{
        console.log("按钮被点")
        const count=this.state.count+1;
        this.setState({
            count:count
        })
    };

    //onClick接受的是一个函数
    render(){
        return(
            <div>
               <h2>{this.state.count}</h2>
               <button onClick={this.handleClick}>按钮</button>
            </div>)
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
