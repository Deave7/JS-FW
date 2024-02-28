/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Counter.css'

function Counter() {
    const [counter, setCounter] = useState(0)

    const countUp = () => {
        setCounter(counter + 1)
    }

    const countDown = () => {
        setCounter(counter - 1)
    }


  return (
    <>
        <button onClick={countUp}>+</button>
        <p>{counter}</p>
        <button onClick={countDown}>-</button>
    </>
  )
}

export default Counter