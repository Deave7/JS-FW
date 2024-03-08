import { useReducer } from "react";

const ACTION = {
    ADD: "ADD",
    ADDXYZ: "ADDXYZ",
    ADDINPUT: "ADDINPUT",
    REMOVE: "REMOVE",
    RESET: "RESET",
}

type State = {
    string: string
}

type Action = {
    type: string;
    payload: string;
}

const stringReducer = (state: State, action: Action) => {
    switch (action.type) {
        case ACTION.ADD: 
            return {string: state.string + action.payload }
        case ACTION.ADDXYZ: 
            return {string: state.string + action.payload }
        case ACTION.ADDINPUT:
            return {string: state.string + action.payload}
        case ACTION.REMOVE:
            return {string: state.string.substring(0, state.string.length - (action.payload ? parseInt(action.payload) : 1))}
        case ACTION.RESET:
            return {string: state.string = action.payload}
        default: 
        return state
    }
}


function Stringr() {
    const [state, dispatch] = useReducer(stringReducer, {string: ''})

  return (
    <>
      <fieldset>
        <legend>StringR</legend>
        <div>
            <button onClick={() => dispatch({type: ACTION.ADD, payload: 'R'})}>Add R</button>
            <button onClick={() => dispatch({type: ACTION.ADDXYZ, payload: 'XYZ'})}>Add XYZ</button>
            <p>{state.string}</p>
            <button onClick={() => dispatch({type: ACTION.REMOVE, payload: '1'})}>Remove R</button>
            <button onClick={() => dispatch({type: ACTION.RESET, payload: ''})}>Reset</button>
        </div>
      </fieldset>
    </>
  );
}

export default Stringr;
