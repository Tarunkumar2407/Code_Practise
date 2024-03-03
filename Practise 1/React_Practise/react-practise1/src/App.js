import './App.css';
import User from './Components/ClassComponent';
import ClickEvent from './Components/ClickEvent';
import FunctionalComponent from './Components/FunctionalComponents';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <FunctionalComponent />
      <User />
      <ClickEvent />
    </div>
  );
}

export default App;
