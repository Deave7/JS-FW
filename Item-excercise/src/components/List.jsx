import './List.css'

function List({animals, listType = 'ul'}) {
    
    const ListComponent = listType === 'ol' ? 'ol' : 'ul'

    return (
      <ListComponent>
    {animals.map((animal) => {
        return <li>{animal}</li>
    })}
      </ListComponent>
    )
  }
  
  export default List