//react开发使用
import React from 'react';
//浏览器渲染使用
import ReactDOM from 'react-dom';
function Hello(props) {
    return (<h5>Hello:{props.name}</h5>)
}
 class App extends React.Component{
     render(){
         return (
             <div>
              <div>
                  <h2>{this.props.name}</h2>
                  <p>成员数量：{this.props.count}</p>
                  <p>成立时间：{this.props.date.toLocaleString()}</p>
              </div>
                 <Hello name="调用Hello方法1"/>
                 <Hello name="调用Hello方法2"/>
                 <Hello name="调用Hello方法3"/>
                 <Hello name="调用Hello方法4"/>
             </div>
         )
     }
 }
ReactDOM.render(
    <App name='App里面的标题' count={4} date={new Date()}/>,
    document.getElementById('root')
);
