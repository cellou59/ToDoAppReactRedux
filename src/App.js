import React, { Component } from 'react';
import { Todo } from './components/Todo';
import './App.css';
import { connect } from 'react-redux';
import { deleteTodo, completeTodo } from './actions';
import  AddTodo from './components/AddTodo';

class App extends Component {

  

  renderTodos = () => {
    const todos = this.props.todos.map(item => {
      return (
        <Todo
          key={Math.random()}
          item={item}
          checkboxAction={() => this.props.completeTodo(item)}
          buttonAction={() => { this.props.deleteTodo(item) }}
        />
      );
    });

    return (
      <div className="todos">
        <h2>Mes tâches</h2>
        {todos}
      </div >
    );

  }

  render() {
    return (
      <div className="App">
        <header>
          <span role="img" aria-label="">🧠</span>
          <h1>Taskinator</h1>
          <span role="img" aria-label="">🤖</span>
        </header>
        <div className="container">
         <AddTodo/>

          {this.renderTodos()}
        </div>
      </div>
    );
  }
}

// React Redux
const mapStateToProps = (state) => {
  // Quels éléments du state global (store) nous mettons à disposition de ce composant (via les props)
  return {
    todos: state.todos
  };
}

const mapDispatchToProps = (dispatch) => {
  // Quelles actions nous mettons à disposition de ce composant (via les props)
  return {

    deleteTodo: (item) => {
      dispatch(deleteTodo(item));
    },
    completeTodo: (item) => {
      dispatch(completeTodo(item));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);