/* eslint-disable react/prop-types */
import { useState } from 'react';


function Check() {
   /*  const [isCatChecked, setIsCatChecked] = useState(false)
    const [isDogChecked, setIsDogChecked] = useState(false)
    const [value, setValue] = useState("")

    const handleCatChange = () => {
        setIsCatChecked(!isCatChecked)

        if (!isCatChecked && isDogChecked === true) {
            setValue('Cat and Dog')
        }
        else if (!isCatChecked) {
            setValue('Cat')
        }
        else {
            setValue('')
        }


    }
    const handleDogChange = () => {
        setIsDogChecked(!isDogChecked)

        if (!isDogChecked && isCatChecked === true) {
            setValue('Dog and Cat')
        }
        else if (!isDogChecked) {
            setValue('Dog')
        }
        else {
            setValue('')
        }
    } */

    const [value, setValue] = useState('')

    const handleChange = () => {
        const catChecked = document.getElementById('Cat').checked;
        const dogChecked = document.getElementById('Dog').checked;
    
        if (catChecked && dogChecked) {
          setValue('Both Cat and Dog are checked');
        } else if (catChecked) {
          setValue('Cat is checked');
        } else if (dogChecked) {
          setValue('Dog is checked');
        } else {
          setValue('');
        }
    }

    return (  
        <>
            <fieldset>
                <legend>Are you a dog or a cat person? </legend>

                <div>
                    <input type="checkbox" name="Cat" id="Cat" onChange={handleChange} />
                    <label htmlFor="Cat">Cat</label>
                </div>

                <div>
                    <input type="checkbox" name="Dog" id="Dog" onChange={handleChange}/>
                    <label htmlFor="Dog">Dog</label>
                </div>

                <p>{value}</p>
            </fieldset>
        </>
    );
}

export default Check;