 
export default function todoReducer(state = [{id: 1, "text": "Read Redux", completed: true}], action) {
    switch(action.type) {
        case 'ADD_TODO':
            return  [
                    ...state.todos,
                    action.payload
                ]
            
        case 'REMOVE_TODO':
            return  state.todos.filter( todo => todo.id !=  action.payload)
            
        case 'TOGGLE_TODO':
            return state.todos.map(todo => todo.id === action.payload ? {
                    ...todo,
                    completed: !todo.completed
                }: todo)
           
        default:
            return state;
    }
}