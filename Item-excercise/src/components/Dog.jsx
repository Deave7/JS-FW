import './Dog.css'



function Dog({name,size, color, age, image }) {

  const handleClick = () => {
    console.log('Hello')
  }

    return (
      <>
      <div className='dog-container'>
        <p>DOGGO</p>
        <p>Name: {name}</p>
        <p>Size: {size}</p>
        <p>Color: {color}</p>
        <p>Age: {age}</p>
        <img src={image} height="200px" alt="a dog" />
        <button className='click-me-button' onClick={handleClick}>Click me</button>
      </div>
      </>
    )
  }
  
  export default Dog