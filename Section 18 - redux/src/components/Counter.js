import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state =>state.counter);
  const showCounter = useSelector(state=>state.showCounter);
  const dispatch = useDispatch();

  
  const incrementHandler =(number)=>{
    dispatch({type: 'INCREMENT'});
  }

  const increaseHandler =()=>{
    dispatch({type: 'INCREASE',number:5 });
  }

  const decrementHandler = () =>{
    dispatch({type: 'DECREMENT'});
  }

  const toggleCounterHandler = () => {
    dispatch({type:'TOGGLE'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
