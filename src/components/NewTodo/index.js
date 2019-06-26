import React, { Component } from 'react'
import './index.css'

class NewTodo extends Component {
    state = {
        content: '',
        completed: false,
    };

    handleNewTodoChange = (e) => {
        this.setState({ content: e.currentTarget.value });
    };

    addNewTodoHandler = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({ content: '' });
    };

    render() {
        return (
            <form className='newTodo'>
                <input type='text' 
                placeholder='Todo item' 
                value={ this.state.content } 
                onChange={ this.handleNewTodoChange }/>
                <button className='myButton' onClick={ this.addNewTodoHandler }>Add new todo</button>
            </form>
        )
    }
}

export default NewTodo;
