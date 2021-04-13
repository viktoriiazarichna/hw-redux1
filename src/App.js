
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {ChildComp} from './components/ChildComp';

import {
  incAction,
  decAction,
  resetAction,
  incCustomAction,

    incAction2,
    decAction2,
    resetAction2,
    incCustomAction2,

} from './redux/action-creators'



function App() {
    const counter1 = useSelector(({counter1: {counter}}) => {
        return counter
    })

    const counter2 = useSelector(({counter2: {counter}}) => {
        return counter
    })
    
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{counter1} - Counter 1</h1>
        <h1>{counter2} - Counter 2</h1>
      <button onClick={() => dispatch(incCustomAction(102))}>inc custom</button>
      <button onClick={() => dispatch(incAction())}>inc</button>
      <button onClick={() => dispatch(decAction())}>dec</button>
      <button onClick={() => dispatch(resetAction())}>reset</button>

        <br/>

        <button onClick={() => dispatch(incCustomAction2(50))}>inc custom</button>
        <button onClick={() => dispatch(incAction2())}>inc</button>
        <button onClick={() => dispatch(decAction2())}>dec</button>
        <button onClick={() => dispatch(resetAction2())}>reset</button>

        <br/>
        <br/>
        <ChildComp/>
    </div>
  );
}


export default App;
