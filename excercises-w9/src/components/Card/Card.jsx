/* eslint-disable react/prop-types */
import './Card.css'

const Card = ({ firstName, lastName, pantColor, favoriteFood, favoriteTool, pet, hobby }) => {
    
    return (
    <div className='card'>
        <ul>
            <li>First name: {firstName} </li>
            <li>Last name: {lastName}</li>
            <li>Pant color: {pantColor}</li>
            <li>Favorite food: {favoriteFood}</li>
            <li>Favorite tool: {favoriteTool}</li>
            <li>Pet: {pet}</li>
            <li>Hobby: {hobby}</li>
        </ul>
    </div>
    )
}

export default Card