import { useState } from "react"

const useCounter = (startValue: number = 0, maxValue: number = 999, minValue: number = -999) => {
    const [count, setCount] = useState<number>(startValue)

    const increment = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > minValue) {
            setCount(count - 1)
        }
    }

    const reset = () => {
        setCount(startValue)
    }

    const countToMin = () => {
        setCount(minValue)
    }

    const countToMax = () => {
        setCount(maxValue)
    }

   const isEven = (): boolean => {
    return count % 2 === 0;
   }

    return { count, increment, decrement, reset, countToMax, countToMin, isEven}

}

export default useCounter