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
      // const newTodos = newState.concat({
      //   id: uuid(),
      //   content: action.payload,
      //   completed: false
      // });
      
      return {...state,
        todos: newArray};
    }

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

      // if (action.payload === 'all') {
      //   const newState = {...state};
      //   const todoList = [...state.todos];
      //   console.log(todoList)
      //   return {
      //     ...newState,
      //     filter: 'all',
      //     filteredTodos: todoList
      //   }
      }
      // if (action.payload === 'completed') {
      //   const newState = {...state};
      //   const todoList = [...state.todos];
      //   const filteredTodos = todoList.filter(todo => todo.completed === true);
      //   return {
      //     ...newState,
      //     filter: 'completed',
      //     filteredTodos: filteredTodos
      //   }
      // } 
    //   if (action.payload === 'pending') {
    //     const newState = {...state};
    //     const todoList = [...state.todos];
    //     const filteredTodos = todoList.filter(todo => todo.completed === false);
    //     return {
    //       ...newState,
    //       filter: 'pending',
    //       filtered: filteredTodos
    //     }
    //   }
    // }
    
    default:
      return state;
  }
}
export default todoReducer;
