import React from 'react'
import '../../styles/movieCard.css'
export default function MovieCard(props) {
  return (
    <div>
        <div className='cardcontainer'>
            <img src={props.image} alt="image" />
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <div className="cardOverContainer">
          <h2>{props.overTitle}</h2>
          <p>{props.overDesc}</p>
     </div>
        </div>
    </div>
  )
}
