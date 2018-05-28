import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  state={
    todo:[{}]

  };
  componentDidMount(){
    
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
