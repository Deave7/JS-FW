import {useState} from 'react'
import './DropDown.css'
import Card from '../card/Card.jsx'

// eslint-disable-next-line react/prop-types
const DropDown = ({list}) => {
    const data = list;
    const [selectedPerson, setSelectedPerson] = useState(null)
    const [selectedPersonDetails, setSelectedPersonDetails] = useState(null);

    const handleSelectChange = (event) => {
        const selectedPersonName = event.target.value;
        setSelectedPerson(selectedPersonName);

        
        const personDetails = data.construction_workers.find(person => `${person.firstname} ${person.lastname}` === selectedPersonName);
        setSelectedPersonDetails(personDetails);
    }

    
  
    return (
    <div className="grid-container">
        <label htmlFor="person-select"></label>
        
        <select name="" id="person-select" onChange={handleSelectChange}>
            <option value="">---Please choose an option---</option>
            {data.construction_workers.map((person, index) => (
                    <option key={index} value={`${person.firstname} ${person.lastname}`}>
                        {person.firstname} {person.lastname}
                    </option>
                ))}
        </select>
    <div className="drop-down-container">
        {selectedPerson && (
        <Card 
            firstName={selectedPerson.split(' ')[0]}
            lastName={selectedPerson.split(' ')[1]}
            pantColor={selectedPersonDetails.pant_color}
            favoriteFood={selectedPersonDetails.favorite_food}
            favoriteTool={selectedPersonDetails.favorite_tool}
            pet={selectedPersonDetails.pet}
            hobby={selectedPersonDetails.hobby}
        />)}
       
    </div>
    </div>
    )

    
}

export default DropDown