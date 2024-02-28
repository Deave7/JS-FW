/* eslint-disable react/prop-types */
import './DropDown.css'
import { useState } from 'react';


function DropDown({vehicleArray}) {
    const [selected, setSelected] = useState('')

    const handleChange = (event) => {
        setSelected(event.target.value)
    }

    return ( 
        <>
            <fieldset>
                <legend>DropDown</legend>
                <select name="" id="select" onChange={handleChange}>
                <option value="">---Please Choose an option---</option>
                {vehicleArray.map((option, index) => (
                    <option key={index} value={`${option}`}>
                        {option}
                    </option>
                ))}

                </select>

                <div>
                    <p>{selected}</p>
                </div>
            </fieldset>
        </>
     );
}

export default DropDown;