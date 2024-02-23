import "./DinoInfoBox.css"

function DinoInfoBox({name, discoveryYear, period, length, weight, image, flexDir }) {

    const flexDirection = flexDir === 'row' ? 'row' : 'row-reverse'

    return (
      <>
        <div className='dino-container' style={{flexDirection: flexDirection}}>
        <div>
        <p>DINO</p>
        <p>Name: {name}</p>
        <p>Discovery Year: {discoveryYear}</p>
        <p>Period: {period}</p>
        <p>Length: {length}</p>
        <p>Weight: {weight}</p>
        </div>
        <div>
        <img src={image} height="200px" alt="a dino" />
        </div>
      </div>
      </>
    )
  }
  
  export default DinoInfoBox