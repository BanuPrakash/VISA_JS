
import './App.css';
import CustomerList from './components/CustomerList';
import LifeCycleComponent from './hooks/LifeCycleComponent';
import Parent from './hooks/Parent';

function App() {
  return (
    <div className="App">
      <LifeCycleComponent />
      <Parent />
      <h1>Customer Application</h1>
      <CustomerList />
    </div>

  );
}

export default App;
