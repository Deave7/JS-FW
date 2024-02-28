/* eslint-disable react/prop-types */

import './RepeatText.css'

function RepeatText({ string, count }) {
    const paragraphs = Array.from({length: count}, (index) => (
        <p key={index}>{string}</p>
    ))
 

  return (
    <>
    <div>{paragraphs}</div>
    </>
  )
}

export default RepeatText
