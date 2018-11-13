import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todos: [{text: "create a new thing", isDone: true}],
    todoInput: '',
  }

  addTodo = () => {
    this.setState({todos: [...this.state.todos , {text: this.state.todoInput, isDone: false}], todoInput: ''})
  }

  render() {
    const todos = this.state.todos.map((todo, index) => {
      return (<div className={(todo.isDone) ? "todoItemDone" : "todoItem"} key={index}>
                <p className="todoText"> {todo.text}</p>
                <input checked={todo.isDone} className="todoCheckbox" type="checkbox" 
                onChange={(e) => {
                    const clonedTodos = this.state.todos.slice();
                    clonedTodos[index].isDone = e.target.checked;
                    this.setState({todos: clonedTodos});
                  }} />
              </div>);
    });

    return (
      <div className="App">
        <div>
          {todos}
        </div>

        <div>
          <input type="text" value={this.state.todoInput} onChange={(e) => {this.setState({todoInput: e.target.value})}} />
          <button onClick={this.addTodo}>add</button>
        </div>
      </div>
    );
  }
}

export default App;
