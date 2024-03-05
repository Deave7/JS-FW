import React, { useRef, useState } from "react";

function Addition<T extends string>() {
    const [values, setValues] = useState<{ valueOne: T; valueTwo: T }>({ valueOne: '' as T, valueTwo: '' as T });
    const [value, setValue] = useState<T | ''>('');
    const inputOne = useRef<HTMLInputElement>(null);
    const inputTwo = useRef<HTMLInputElement>(null);

    const handleChange = (field: keyof typeof values) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value as T;
        setValues(prevState => ({
            ...prevState,
            [field]: inputValue
        }));
    }

    const handleClick = () => {
        if (inputOne.current && inputTwo.current) {
            const num1 = isNaN(Number(values.valueOne)) ? values.valueOne : Number(values.valueOne);
            const num2 = isNaN(Number(values.valueTwo)) ? values.valueTwo : Number(values.valueTwo);
    
            let result: T | '' = '';
    
            if (typeof num1 === 'number' && typeof num2 === 'number') {
                result = String(num1 + num2) as T;
            } else {
                result = String(num1) + String(num2) as T;
            }
    
            setValue(result);
            setValues({ valueOne: '' as T, valueTwo: '' as T });
            inputOne.current.focus();
        }
    }

    return ( 
        <>
        <fieldset>
            <legend>Addition + concat</legend>
            <input ref={inputOne} value={values.valueOne as string} type="text" onChange={handleChange('valueOne')} />
            <input ref={inputTwo} value={values.valueTwo as string} type="text" onChange={handleChange('valueTwo')} />
            <button onClick={handleClick}>Click me!</button>
            <p>{value}</p>
        </fieldset>
        </>
    );
}

export default Addition;
