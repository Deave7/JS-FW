import './Dog.css'

function Dog({name,size, color, age }) {

    return (
      <>
      <div className='dog-container'>
        <p>DOGGO</p>
        <p>Name: {name}</p>
        <p>Size: {size}</p>
        <p>Color: {color}</p>
        <p>Age: {age}</p>
      </div>
      </>
    )
  }
  
  export default Dog