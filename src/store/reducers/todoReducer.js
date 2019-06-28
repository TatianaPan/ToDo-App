import uuid from 'uuid';
//!now we do not to have todos - we declare this property in combined reducer
const initialState = [
  { id: uuid(), content: 'Master JS', completed: false}, 
  { id: uuid(), content: 'Learn React', completed: false}, 
  { id: uuid(), content: 'Learn Redux', completed: true}
];

const todoReducer = (state = initialState, action) => {
  console.log('in reducer')
  console.log(action.payload)
  switch (action.type) {
    case 'ADD_TODO': {
      //const newState = {...state};
      const newTodos = [...state];
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
      
      return newArray;
    }

    default:
      return state;
  }
}
export default todoReducer;
