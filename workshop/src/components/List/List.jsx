/* eslint-disable react/prop-types */

import './List.css'

function List({animalArray}) {
 

  return (
    <>
        <ul>
        {animalArray.map((animal, index) => (

          <li key={index} >{animal}</li>
          
        ))}
        </ul>
    </>
  )
}

export default List
