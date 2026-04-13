import { connect } from 'react-redux'
import './App.css'
import { useRef } from 'react'

function App(props) {
  let todoRef = useRef();
  
  function remove(evt, id) {
    // Event capturing and bubbling phase
    evt.stopPropagation();
    console.log("Called remove")
    props.remove(id);
  }

  function toggle(evt, id) {
    evt.stopPropagation();
    console.log("Called toggle")
    props.toggle(id);
  }
  function addTodo() {
    let todo = {
      id: new Date().getTime(),
      text: todoRef.current.value,
      completed: false
    }
    props.add(todo);
  }

 return (
  <div id="app" onClick={() => console.log("Div id=app clicked")}>
    <div onClick={() => console.log("Div  clicked")}>
      <h1>Todo List</h1>
      <div>
        Welcome {props.displayName}
      </div>
      <input type="text"
      ref={todoRef}
      placeholder="Enter a task ..." />
      <button onClick={addTodo} type='button'>
        Add
      </button>
      <ul>
      {
        props.todoList.map(todo => (
          <li className='todo' key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "red" : "black"
            }}
            onClick={(evt) => toggle(evt, todo.id)}
            >
              {todo.text}
              <button type='button'
               onClick={(evt) => remove(evt, todo.id)}
              >Remove</button>
          </li>
        ))
      }
      </ul>
    </div>
  </div>
 )
}

function mapStateToProps(state) {
  return {
    "displayName": state.profile.name,
    "todoList": state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: (todo) => dispatch({type: 'ADD_TODO', payload: todo}),
    remove: id => dispatch({type: 'REMOVE_TODO', payload: id}),
    toggle: id => dispatch({type: 'TOGGLE_TODO', payload: id})
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
) (App);
