import './List2.css'

function List2({animals, listType = 'ul'}) {
    
    const ListComponent = listType === 'ol' ? 'ol' : 'ul'

    return (
      <ListComponent>
    {animals.map((animal) => {
        return (
            <div className='animal-container'>
                <li>Name: {animal.name}</li>
                <li>Number of legs {animal.legs}</li>
            </div>
        )
    })}
      </ListComponent>
    )
  }
  
  export default List2