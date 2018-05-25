import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    todo:[{}]

  };
  componentDidMount(){
    fetch("/user/a/show").then(
      (res)=>{
        res = res.json();
        res.then((todos)=>{
          // console.log(todos)
          // this.setState.todos=a;
          var a=JSON.parse(todos);
          this.setState({
            todo : a
          });
          console.log(this.state.todo)
          
        // console.log(res)
        // this.todos.setState=this.state.todos;
        
      })
    }
    ,()=>{}
    ).catch((error)=>{
      alert(error);
    });
  }

  render() {
    return (
      <div className="App">
        <h3>Todos</h3>
        {/* {
          this.state.todo.map(todol=>
            <div>
            <div>{todol.task}</div>
            <div>{todol.priority}</div>
            </div>
        )
        } */}
        {/* {this.state.todo.map((todo) =>
          {  
                
                <div>{todo.task}</div>
                <div>{todo.completeStatus}</div>
                <div>{todo.priority}</div>
          } 
        )}   */}
        <table>
          
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
          
          {this.state.todo.map(todo=>
            
              <tbody>
              <tr>
                <td>{todo.task}</td>
                <td>{todo.completeStatus}</td>
                <td>{todo.priority}</td>
              </tr>
              </tbody>
            
          )}
          
        </table>
      </div>
    );
  }
}

export default App;
