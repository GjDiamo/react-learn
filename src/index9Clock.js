import React from 'react';
import ReactDOM from 'react-dom';
// 类的形式
class Clock extends React.Component {
    constructor() {
        super();
        // 1. 初始化自己的state状态
        this.state = {
            title: "罗马表",
            date: new Date()
        };
    }
    componentDidMount(){
        console.log('componentDidMount:组件已经挂载，开启任务')
        setInterval(() => {
            this.tick();
        }, 1000)
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>{this.state.date.toLocaleString()}</h3>
            </div>
        )
    }
}
//这种方法区别于8，在于将Clock作为一个类，我们去调用它，可以原封不动的引用也可以进行重新赋值！
class App extends React.Component{
    render(){
        return(
            <div>
                {/*<Clock/>*/}
                <Clock title="罗马表1"/>
                <Clock title="罗马表2"/>
                <Clock title="罗马表3"/>
            </div>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
