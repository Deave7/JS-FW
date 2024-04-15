import useCounter from './useCounter';

type CounterProps = {
  startValue?: number;
  maxValue?: number;
  minValue?: number;
}

const Counter: React.FC<CounterProps> = ({ startValue, maxValue, minValue }) => {
  const { count, increment, decrement, reset, countToMin, countToMax, isEven } = useCounter(
    startValue,
    maxValue,
    minValue
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
    </div>
  );
};

export default Counter;
