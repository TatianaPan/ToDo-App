import React, { Component } from 'react';
import TodoItem from '../TodoItem'
import './index.css'

class TodoList extends Component{
    render() {
      
      return (
        <ul className='list'>
         {
            this.props.todos.map(todo => {
                return <TodoItem 
                key={ todo.id } 
                todo={ todo } 
                id={ todo.id }
                changeCompleted={ this.props.changeCompleted }
                deleteTodo={ this.props.deleteTodo }
               
                />
            })
         }
      </ul>
      );
    }
  }
  
  export default TodoList; 
