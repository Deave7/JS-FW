import './ToDo.css'
import { useState } from 'react';


function ToDo() {

    const [value, setValue] = useState('')
    const [items, setItems] = useState([])

    const handleClick = () => {
        setItems([...items, value])
        setValue('')
    }


    return ( 
        <>
        <input id='text' value={value} type="text" placeholder='write here :)' onChange={(e) => setValue(e.target.value)}/>
        <button type="submit" onClick={handleClick}>SUBMIT</button>

        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        </>
     );
}

export default ToDo;
<>
</>