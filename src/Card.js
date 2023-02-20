import React from 'react'

const Card = ( match ) => {

  return (
    <div className="card">
      {/* <img src={props.image} alt={props.title} /> */}
      <div className="card-body">
        <h2>sahil rayu Vs Sahil Rayu</h2>
        <p>{match.name}</p>
        <p>Occupation: berozgar</p>
        <p>{new Date().toString()}</p>
      </div>
    </div>
  )
}

export default Card
