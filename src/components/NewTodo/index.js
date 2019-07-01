import React, { Component } from 'react'
import './index.css'
import {connect} from 'react-redux'
//import { addTodo } from '../../store/actions'
//import store from '../../store'

class NewTodo extends Component {
    state = {
        content: ''
    };

    handleAddTodo = (e) => {
        e.preventDefault();
        const action = {
            type: 'ADD_TODO',
            payload: this.state.content
        }
        //console.log(this.state.content);
        this.props.dispatch(action); 
        this.setState({ content: '' })
        // const todos = [...this.state.todos];
        // const newTodos = todos.concat(newItem);
        // this.setState({todos: newTodos})
    };

    handleNewTodoChange = (e) => {
        
        this.setState({ content: e.currentTarget.value });
        console.log(this.state.content)
    };

    // addNewTodoHandler = (e) => {
    //     e.preventDefault();
    //     this.props.addTodo(this.state);
    //     this.setState({ content: '' });
    // };

    render() {
        return (
            <form className='newTodo'>
                <input type='text' 
                placeholder='Todo item' 
                value={ this.state.content } 
                onChange={ this.handleNewTodoChange }/>
                <button className='myButton' onClick={ this.handleAddTodo }>Add new todo</button>
            </form>
        )
    }
}

// const connection = connect(null);

// const ConnectedNewTodo = connection(NewTodo);

export default connect()(NewTodo);
