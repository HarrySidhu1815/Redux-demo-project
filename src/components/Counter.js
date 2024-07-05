import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'
import {counterAction} from '../store/counter.js'

const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)
  
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {
    dispatch(counterAction.toogle())
  };

  function handleIncrease(){
    dispatch(counterAction.increment())
  }
  function handleIncreaseBy5(){
    dispatch(counterAction.increase(5))
  }
  function handleDecrease(){
    dispatch(counterAction.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrease}>Increment</button>
        <button onClick={handleIncreaseBy5}>Increment By 5</button>
        <button onClick={handleDecrease}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
