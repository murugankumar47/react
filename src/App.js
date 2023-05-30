// import logo from './logo.svg';
import './App.css';

import Fragments from './components/Fragments';
import Formhandling from './components/Formhandling';
import Login from './components/Usestate';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <Fragments/>
      <Formhandling/>
      <Login/>
      <Counter/>
        </div>
  );
}       
export default App;