/* eslint-disable react/prop-types */
import './ColorBox.css'

function ColorBox({colorArray}) {

    return ( 
        <>
        <div className="div-container">
            {colorArray.map((color, index) => (
                <div key={index} className="square" style={{backgroundColor: color}}></div>
            ))}
        </div>
        </>
     );
}

export default ColorBox
