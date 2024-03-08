import { useReducer, useRef, useState } from "react";

const ACTION = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    RESET: "RESET",
    ADD10: "ADD10",
    HALVE: "HALVE",
    DOUBLE: "DOUBLE",
    ADDN: "ADDN",
}

type State = {
    count: number
}

type Action = {
    type: string;
    payload: number
}

const countReducer = (state: State, action: Action ) => {

    switch (action.type) {
        case ACTION.ADD: 
            return {count: state.count + action.payload}
        case ACTION.REMOVE:
            return { count: state.count - action.payload}
        case ACTION.RESET: 
            return { count: state.count = action.payload}
        case ACTION.ADD10: 
            return { count: state.count + action.payload}
        case ACTION.HALVE: 
            return { count: state.count / action.payload}
        case ACTION.DOUBLE: 
            return { count: state.count * action.payload}
        case ACTION.ADDN:
            return {count: state.count + action.payload}
        default: 
            return {count : state.count}
    }

}




function Counter() {

    const [value, setValue] = useState('')
    const [state, dispatch] = useReducer(countReducer, {count: 0})
    const inputRef = useRef<HTMLInputElement>(null);

    
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            setValue(event.target.value)
    }


    return ( 
        <>
            <fieldset>
            <legend>Counter</legend>
            <div>
                <button onClick={() => dispatch({type: ACTION.ADD, payload: 1 })}>Add</button>
                <p>{state.count}</p>
                <button onClick={() => dispatch({type: ACTION.REMOVE, payload: -1})}>Remove</button>
                <button onClick={() => dispatch({type: ACTION.RESET, payload: 0})}>Reset</button>
                <button onClick={() => dispatch({type: ACTION.ADD10, payload: 10})}>Add 10</button>
                <button onClick={() => dispatch({type: ACTION.HALVE, payload: 2})}>Halve</button>
                <button onClick={() => dispatch({type: ACTION.DOUBLE, payload: 2})}>Double</button>

                <input ref={inputRef} value={value} type="text" name="input" onChange={handleChange} />
                <button onClick={() => dispatch({type: ACTION.ADDN, payload: Number(value)})}>Add from input</button>

            </div>
            </fieldset>
        </>
     );
}

export default Counter;