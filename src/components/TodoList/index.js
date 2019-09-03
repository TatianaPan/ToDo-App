import React, { Component } from 'react';
import TodoItem from '../TodoItem'
import './index.css'
import {connect} from 'react-redux'

class TodoList extends Component{
    render() {
      //console.log(this.props.dispatch);
      return (
        
        <ul className='list'>
         { 
            this.props.todos.map(todo => {
              
                return <TodoItem 
                key={ todo.id } 
                todo={ todo } 
                id={ todo.id }
                //changeCompleted={ this.props.changeCompleted }
                //deleteTodo={ this.props.deleteTodo }
                />
            })
         }
      </ul>
      );
    }
  }
 

// const mapStateToProps = state => {
    
//     return {
//         todos: state.todoReducer.todos
//     }
// }


// const connection = connect(mapStateToProps);

// const ConnectedTodoList = connection(TodoList);

export default connect()(TodoList); 
  
