import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "../actions/types";

const initialState = {
    todos: []
};

export default function rootReducer(state = initialState, action) {
    let todos = [...state.todos];
    let position
    switch (action.type) {
        case ADD_TODO:
            // Ajout d'un tache dans le state
            return {
                todos: [...state.todos, action.payload]
            };
        default:
            return state;

        case DELETE_TODO:

            position = todos.indexOf(action.payload)
            todos.splice(position, 1)

            return {
                todos
            };
        
        case COMPLETE_TODO:
            position = todos.indexOf(action.payload);
            let todo = { ...todos[position] };
            todo.complete = !todo.complete;
            todos[position] = todo;
            
            return {
                todos 
            }
    }

}