import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
import { Button } from '../components/Button';

class AddTodo extends Component {
    
    state = {
        text: "",
      }
    render() {
        return (
            <div className="form-group">
            <input
              type="text"
              className="todo-input"
              onChange={(e) => this.setState({ text: e.target.value })}
              value={this.state.text}
            />
            <Button
              className="btn"
              action={() => { this.props.addTodo(this.state.text) }}
            >
              Ajouter une tâche
            </Button>
          </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
      addTodo: (text) => {
        dispatch(addTodo(text));
      }
    }
}
export default connect (null, mapDispatchToProps)(AddTodo);