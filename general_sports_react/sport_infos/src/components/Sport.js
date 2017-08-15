import React from 'react';

const Sport = (props) => {
  return(
  	<div>
      <h2>{props.sport.name} </h2>
      <img src={props.sport.img} />
      <p>{props.sport.state}</p>
      </div>
    
  )
}

export default Sport;