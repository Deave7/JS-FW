/* eslint-disable react/prop-types */

import './List.css'

function List({animalArray}) {
 

  return (
    <>
        {animalArray.map((animal, index) => (
          
          <ul key={index}>
            {typeof animal === 'string' ? (
              <li>{animal}</li>
            ) : (
              <>
              <li > Name: {animal.name}</li>
              <ul>
              <li >Legs: {animal.legs}</li>
              <li >Color: {animal.color}</li>
              </ul>
              </>
              )}
              </ul>
        ))}
    </>
  )
}

export default List
