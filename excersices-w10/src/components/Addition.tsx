import React, { useRef, useState } from "react";

function Addition() {
    const [value, setValue] = useState('');
    const [valueOne, setValueOne] = useState('');
    const [valueTwo, setValueTwo] = useState('');
    const inputOne = useRef<HTMLInputElement>(null);
    const inputTwo = useRef<HTMLInputElement>(null);

    let num1 = 0;
    let num2 = 0;

    const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (field === 'inputOne') {
            setValueOne(inputValue);
        } else if (field === 'inputTwo') {
            setValueTwo(inputValue);
        }
    }

    const handleClick = () => {
        if (inputOne.current && inputTwo.current) {
            num1 = Number(inputOne.current.value);
            num2 = Number(inputTwo.current.value);
            const result = String(num1 + num2);
            setValue(result);
            setValueOne('');
            setValueTwo('');
            inputOne.current.focus()
        }
    }

    return ( 
        <>
            <input ref={inputOne} value={valueOne} type="text" onChange={handleChange('inputOne')} />
            <input ref={inputTwo} value={valueTwo} type="text" onChange={handleChange('inputTwo')} />
            <button onClick={handleClick}>Click me!</button>
            <p>{value}</p>
        </>
    );
}

export default Addition;