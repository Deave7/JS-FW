import Counter from '../components/counter.tsx'
import "./App.css";

function App() {

  return (
    <>
    <Counter startValue={0} minValue={-100} maxValue={10}/>
    <Counter startValue={100} minValue={0} maxValue={200}/>
    <Counter startValue={-100} minValue={-300} maxValue={0} stepValue={10}/>
    </>
  );
}

export default App;
