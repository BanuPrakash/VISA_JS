export default function countReducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count : state.count + action.payload
            }
        case 'DECREMENT':
            return {
                count : state.count - 1
            }
        case 'CLEAR':
            return {
                count : 0
            }
        default: return state;
    }

}

/*
dispatch({
     type: 'INCREMENT',
     payload: 5
})
dispatch({
     type: 'DECREMENT'
})
dispatch({
     type: 'CLEAR'
})
*/