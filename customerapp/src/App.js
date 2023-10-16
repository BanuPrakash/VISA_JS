
import './App.css';
import CustomerList from './components/CustomerList';
import LifeCycleComponent from './hooks/LifeCycleComponent';
import Parent from './hooks/Parent';
import ReducerExample from './hooks/ReducerExample';

function App() {
  return (
    <div className="App">
      <ReducerExample />
      <LifeCycleComponent />
      <Parent />
      <h1>Customer Application</h1>
      <CustomerList />
    </div>

  );
}

export default App;
