import React from 'react';

import './card.styles.css';

const Card = props => {
  return (
    <div className='card-container'>
      <img alt='img' src={`https://picsum.photos/id/${props.school.id}/180/180`} />
      <h2>{props.school.name}</h2>
      <p>{props.school.email}</p>
    </div>
  )
}

export default Card;
