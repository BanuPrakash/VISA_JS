import { useReducer } from "react"
import cartReducer from "../reducers/cartReducer"

const initialState = {
    "items": [],
    "quantity": 0,
    "total": 0
}
export default function Dummy() {
    let [state, dispatch] = useReducer(cartReducer, initialState);

  function first() {
    dispatch({"type": "ADD_TO_CART", payload: {"id": 14, "name": "A", "price": 642.22}})
  }

  function second() {
    dispatch({"type": "ADD_TO_CART", payload: {"id": 3, "name": "B", "price": 999.22}})
  }
  function inc(id) {
    dispatch({"type": "INCREMENT", payload: id})
  }
  return (

    <div>
        <button type="button" onClick={first}>Add First Product</button>
        <button type="button" onClick={second}>Add Second Product</button>
        <button type="button" onClick={() => inc(3)}>Add Second Product</button>
        <button type="button" onClick={() => dispatch({type:'CLEAR_CART'})}>CLEAR</button>
        <hr />
        Total : {state.total} <br />
        Quantity: {state.quantity} <br />

        {
            state.items.map(item => <div>{item.name}, {item.qty}, {item.price}, {item.amount}</div>)
        }
    </div>
  )
}
