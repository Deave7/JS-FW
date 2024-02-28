import './Radio.css'
import { useState } from 'react';


function Radio() {
    const [selected, setSelected] = useState('')
    

    const handleSelect = (event) => {
        setSelected(event.target.value)
    }
    

    

    return (  
        <>
        <fieldset>
            <legend>RadioButtons</legend>
            <input type="radio" name="radioButtons" id="cat" value="Cat" onChange={handleSelect}  />
            <label htmlFor="cat">Cat</label>
            <input type="radio" name="radioButtons" id="dog" value="Dog" onChange={handleSelect}  />
            <label htmlFor="dog">Dog</label>
            <div>
                <p>{selected}</p>
            </div>
        </fieldset>

        </>
    );
}

export default Radio;
<>
</>