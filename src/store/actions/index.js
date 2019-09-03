export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }  
}

export const deleteTodoItem = (id) => {
    return {
        type: 'DELETE_TODO',
        item_id: id
    }
}

export const toggleCompleted = (id) => {
    return {
        type: 'TOGGLE_COMPLETED',
        item_id: id
    }
}

export const changeFilterValue = (value) => {
    return {
        type: 'FILTER',
        payload: value
    }
}
