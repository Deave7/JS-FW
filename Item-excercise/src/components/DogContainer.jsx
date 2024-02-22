import './DogContainer.css'
import dog from '../assets/data.json'
import Dog from './Dog.jsx'

function DogContainer() {
    const data = dog.data;

    return (
      <>
      <div className='container'>
        <h2>Dog Yard</h2>
        <div className='dogs-container'>
        {data.map((dog) => {
            return <Dog name= {dog.name} size={dog.size} color={dog.color} age={dog.age} />
        })}
        </div>
        </div>
      </>
    )
  }
  
  export default DogContainer