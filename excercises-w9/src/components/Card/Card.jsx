/* eslint-disable react/prop-types */
import './Card.css'

const Card = ({ firstName, lastName, pantColor, favoriteFood, favoriteTool, pet, hobby }) => {
    
    return (
    <div className='card'>
        <ul>
            <li>First name: {firstName} </li>
            <li>Last name: {lastName}</li>
            <li>Pant color: {pantColor}</li>
            <li>Favorite foods:</li>
            <ul> 
                {favoriteFood.map((food, index) => (
                  <li key={index}>{food}</li>
                ))}
            </ul>
            <li>Favorite tool: {favoriteTool}</li>
            <li>Pets:</li>
            <ul>
                {pet.map((pet, index) => (
                    <li key={index}>{pet}</li>
                ))}
            </ul>
            <li>Hobbies:</li>
            <ul>
                {hobby.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </ul>
    </div>
    )
}

export default Card