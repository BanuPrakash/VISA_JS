import { connect } from 'react-redux'
import './App.css'
function App(props) {
 return (
  <div id="app">
    <div>
      <h1>Todo List</h1>
      <div>
        Welcome {props.displayName}
      </div>
      <input type="text"
      placeholder="Enter a task ..." />
      <button>
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
            >
              {todo.text}
              <button>Remove</button>
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
export default connect(
  mapStateToProps
) (App);
