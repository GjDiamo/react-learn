import React from 'react';
import ReactDOM from 'react-dom';
// 类的形式
class App extends React.Component {
    constructor() {
        super();
        // 1. 初始化自己的state状态
        this.state = {
            title: "罗马表",
            date: new Date()
        };
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
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
