import uuid from 'uuid';

//!now we do not to have todos - we declare this property in combined reducer
const initialState = {
  filter: 'all',
  todos: [ { id: uuid(), content: 'Master JavaScript', completed: false}, 
  { id: uuid(), content: 'Learn React', completed: false}, 
  { id: uuid(), content: 'Learn Redux', completed: false} ],
  filteredTodos: []

};

const todoReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case 'ADD_TODO': {
      //const newState = {...state};
      const newTodos = [...state.todos];
      const newTodo = {
        id: uuid(),
        content: action.payload,
        completed: false
      }
      const newArray = newTodos.concat(newTodo);
    
      
      return {...state,
        todos: newArray};
    };

    case 'DELETE_TODO': {
      const newTodoList = [...state.todos];
      const itemIndex = newTodoList.findIndex(item => item.id === action.item_id);
      //const deletedItem = newTodoList[itemIndex];
      newTodoList.splice(itemIndex, 1);
      return {...state, 
        todos: newTodoList};
    }

    case 'TOGGLE_COMPLETED': {

      const todoList = [...state.todos];
     
      const itemIndex = todoList.findIndex(item => item.id === action.item_id);
     
      const todo = todoList[itemIndex];
      const newTodo = {...todo, ...{ completed: !todo.completed } };
     
      todoList.splice(itemIndex, 1, newTodo)
    
      return {...state, 
        todos: todoList};
    }

    case 'FILTER': {
      return {
        ...state,
        filter: action.payload
      }

    }
     
    
    default:
      return state;
  }
}
export default todoReducer;
