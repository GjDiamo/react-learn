//react开发使用
import React from 'react';
//浏览器渲染使用
import ReactDOM from 'react-dom';
//导入css
//import "./css/counter.css"
// 类的形式
class App extends React.Component{
 constructor(){
     super();
     this.state={
         count:0,
         timeLeft:10
     }
 };
 //组件已挂载
    componentDidMount() {
        this.timeId = setInterval(() => {
            if(this.isTimeUp()) {
                clearInterval(this.timeId);
                return
            }
            this.setState({
                timeLeft:this.state.timeLeft-1
            })
        },1000)
    };
    isTimeUp() {
        return this.state.timeLeft <= 0;
    }
    //组件卸载
    componentWillUnmount() {
        console.log("组件将被卸载")
        clearInterval(this.timerId);
    }
    //点击一次，数字就更新一次；
    handleClick=()=>{
        if(this.isTimeUp()){
            return
        }
        this.setState({
            count:this.state.count+1
        })
    }
    //onClick接受的是一个函数
    render(){
        let tip=null;
        if(this.isTimeUp()){
            tip=<h3>时间已到，总共按了{this.state.count}次</h3>
        }else{
            tip=<h3>剩余时间，{this.state.timeLeft}秒</h3>
        }
        const btnStyle = {
            width: 200, height: 200,
            backgroundColor: (this.state.count % 2 === 0) ? 'red':'green',
            fontSize: 22
        };
        return(
            <div>
               <h2>计数器游戏, 试试你的手速!</h2>
                {tip}
               <button style={btnStyle} onClick={this.handleClick}>按钮</button>
            </div>
        );
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
