import React, { Component } from 'react'; 
import Header from '../Header'
import TodoList from '../TodoList'
import NewTodo from '../NewTodo';
//import uuid from 'uuid';
import Filter from '../Filter';
import { connect } from 'react-redux'


class App extends Component { 
    // state = {
    //     todos: [
    //         { id: uuid(), content: 'Master JS', completed: false}, 
    //         { id: uuid(), content: 'Learn React', completed: false}, 
    //         { id: uuid(), content: 'Learn Redux', completed: true}
    //       ],
    //       filter: 'all',
    // };
    // constructor(props) {
    //     super(props); 
    
    //     this.state = {
    //       todos: [
    //           { id: uuid(), content: 'Master JS', completed: false}, 
    //           { id: uuid(), content: 'Learn React', completed: false}, 
    //           { id: uuid(), content: 'Learn Redux', completed: true}
    //         ],
    //         filter: 'all',
    //     };
    // };

    // addTodo = ({ content, completed }) => {
    //     const newItem = {
    //         id: uuid(),
    //         content,
    //         completed
    //     };
    //     const todos = [...this.state.todos];
    //     const newTodos = todos.concat(newItem);
    //     this.setState({todos: newTodos})
    // };

    changeCompleted = (e, id) => {
        const newTodos = [...this.state.todos];
        const todoIndex = newTodos.findIndex(todo => todo.id === id);
        const todo = { ...this.state.todos[todoIndex] };
        todo.completed = !todo.completed;
        newTodos[todoIndex] = todo;
        this.setState({todos: newTodos});
    };
    

    deleteTodo = id => {
        const newTodos = [...this.state.todos];
        const todoIndex = newTodos.findIndex(todo => todo.id === id);
        newTodos.splice(todoIndex, 1);
        this.setState({ todos: newTodos})
    };
    
    render() {
        return ( 
        <div>
            <Header />   
            <NewTodo />
            {/* <NewTodo addTodo={ this.addTodo }/> */}
            <TodoList />
            {/* <TodoList 
            changeCompleted={ this.changeCompleted } 
            deleteTodo={ this.deleteTodo } 
            todos={ this.state.todos }/>  */}
            <Filter />
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

// const connection = connect(mapStateToProps);

// const ConnectedApp = connection(App);

export default connect(mapStateToProps)(App); 