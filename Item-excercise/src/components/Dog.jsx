import './Dog.css'

function Dog({name,size, color, age, image }) {

    return (
      <>
      <div className='dog-container'>
        <p>DOGGO</p>
        <p>Name: {name}</p>
        <p>Size: {size}</p>
        <p>Color: {color}</p>
        <p>Age: {age}</p>
        <img src={image} height="100px" alt="a dog" />
      </div>
      </>
    )
  }
  
  export default Dog