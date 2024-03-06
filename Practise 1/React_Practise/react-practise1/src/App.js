import './App.css';
import User from './Components/ClassComponent';
import ClickEvent from './Components/ClickEvent';
import ConditionalRendering from './Components/ConditionalRendering';
import CounterByClass from './Components/CounterClass';
import FormHandle from './Components/FormHandling.js/FormHandle';
import FunctionalComponent from './Components/FunctionalComponents';
import GetInputBoxValue from './Components/GetInputBoxValue';
// import Parent from './Components/Props/PropsBasics/Parent';
import Parents from './Components/Props/PropsInClass/Parents';
import State from './Components/State';
import StateInClass from './Components/StateInClass';
import Toggle from './Components/Toggle';
import Parent from './Components/Props/PassFunctionAsProps/Parent';
import BasicFormValidation from './Components/BasicFormValidation';
import LifeCycleParent from './Components/LifeCycleMethod.js/LifeCycleParent';
import UseStateWithVariable from './Components/Hooks/UseStateHook/UseStateWithVariable';
import UseStateWithObjects from './Components/Hooks/UseStateHook/UseStateWithObjects';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      {/* <FunctionalComponent />
      <User />
      <ClickEvent />
      <State />
      <StateInClass />
      <CounterByClass /> */}
      {/* <Parent />
      <Parents /> */}
      {/* <GetInputBoxValue />
      <Toggle /> */}
      {/* <FormHandle />
      <ConditionalRendering />
      <Parent /> */}
      {/* <BasicFormValidation /> */}
      {/* <LifeCycleParent /> */}
      {/* <UseStateWithVariable /> */}

      <UseStateWithObjects />
      </div>
  );
}

export default App;
