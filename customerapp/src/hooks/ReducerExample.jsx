import { useReducer } from "react";
import countReducer from "../reducers/countReducer";

const initialState = {
    count : 0
}
export default function ReducerExample() {
    let [state, dispatch] = useReducer(countReducer, initialState);
    return <>
        count: {state.count} <br />

        <button onClick={() => {
            dispatch({type : 'INCREMENT', payload: 5})
        }}>Increment</button>

        <button onClick={() => dispatch({type : 'DECREMENT'})}>
           Decrement
        </button>
        <button onClick={() => dispatch({type : 'CLEAR'})}>
           RESET
        </button>
    </>
}