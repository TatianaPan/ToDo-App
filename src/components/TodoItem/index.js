import React, { Component } from 'react'
//import TodoList from '../TodoList'
import './index.css' 
import {connect} from 'react-redux'

class TodoItem extends Component {

    render() {
        return (
            <div >
                <li onClick={ (e) => this.props.changeCompleted(e.currentTarget, this.props.todo.id)} className={ this.props.todo.completed ? 'TodoItem-completed' : '' }>{ this.props.todo.content }</li> 
                <button onClick={ () => this.props.deleteTodo(this.props.todo.id)}>Delete item</button>
            </div>
        )
    }
}


export default connect()(TodoItem);
