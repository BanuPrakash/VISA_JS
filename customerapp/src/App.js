
import './App.css';
import CustomerList from './components/CustomerList';
import Parent from './examples/Parent';

function App() {
  return (
    <div className="App">
      <Parent />
      <h1>Customer Application</h1>
      <CustomerList />
    </div>
  );
}

export default App;
