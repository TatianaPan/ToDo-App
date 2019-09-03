import React, { Component } from 'react';
//import TodoList from '../TodoList'
import './index.css'; 
import {connect} from 'react-redux';
import {deleteTodoItem} from '../../store/actions';
import { toggleCompleted } from '../../store/actions';

class TodoItem extends Component {

    deleteTodo = (id) => {
      
        this.props.dispatch(deleteTodoItem(id));
    }

    changeCompleted = (id) => {
      
        this.props.dispatch(toggleCompleted(id));
    }


    render() {
        return (
            <div className='todo-card-wrapper'>
                <li onClick={ () => this.changeCompleted(this.props.todo.id)} 
                className={ this.props.todo.completed ? 'TodoItem-completed' : '' }>{ this.props.todo.content }</li> 

                <button className='myButton' onClick={ () => this.deleteTodo(this.props.todo.id)}>Delete</button>
            </div>
        )
    }
}


export default connect()(TodoItem);
