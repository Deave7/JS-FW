import useCounter from './useCounter';

type CounterProps = {
  startValue?: number;
  maxValue?: number;
  minValue?: number;
  stepValue?: number;
}

const Counter: React.FC<CounterProps> = ({ startValue, maxValue, minValue, stepValue = 3 }) => {
  const { count, increment, decrement, reset, countToMin, countToMax, isEven, stepCountDown, stepCountUp } = useCounter(
    startValue,
    maxValue,
    minValue,
    stepValue
  );

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <p>{isEven() ? 'Even' : 'Odd'}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={countToMin}>Set to Min</button>
      <button onClick={countToMax}>Set to Max</button>
      <button onClick={stepCountDown}>Count {stepValue} steps Down</button>
      <button onClick={stepCountUp}>Count {stepValue} steps Up</button>
    </div>
  );
};

export default Counter;
