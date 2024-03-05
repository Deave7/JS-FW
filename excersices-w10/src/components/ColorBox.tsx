import { useRef, useState } from 'react';
import './ColorBox.css'

function ColorBox() {
    const [color, setColor] = useState('white')
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (inputRef.current) {
            const inputValue = inputRef.current.value
            if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i.test(inputValue)) {
                setColor(inputValue);
                setValue('');
                inputRef.current.focus()
            }
            else {
                alert('You may only use correct hexdecimalcolors')
                setValue('')
                inputRef.current.focus()
            }
        }
}

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value)
    }


    return ( 
        <>
        <fieldset>
            <legend>ColorBox</legend>
            <input ref={inputRef} value={value} onChange={handleChange} type="text" name="text" id="text-one" />
            <button onClick={handleClick}>Click me!</button>
            <div className="square" style={{backgroundColor: color}}></div>
        </fieldset>
        </>
     );
}

export default ColorBox;
