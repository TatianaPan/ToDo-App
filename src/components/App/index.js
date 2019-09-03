import React, { Component } from 'react'; 
import Header from '../Header'
import TodoList from '../TodoList'
import NewTodo from '../NewTodo';
//import uuid from 'uuid';
import Filter from '../Filter';
import { connect } from 'react-redux';
import './index.css'


class App extends Component { 

    filteredTodos = () => {
        return this.props.todos.filter(todo => {
            if (this.props.filter === 'all') {
                return true;
            }
            if (this.props.filter === 'completed') {
                return todo.completed;
            }
            return !todo.completed;
        })
    };
    
    render() {
        return ( 
        <div className='app-wrapper'>
            <Header />   
            <Filter />
            <NewTodo />
            <TodoList todos={ this.filteredTodos() } />
            
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todoReducer.todos,
        filter: state.todoReducer.filter
    }
}

export default connect(mapStateToProps)(App); 
