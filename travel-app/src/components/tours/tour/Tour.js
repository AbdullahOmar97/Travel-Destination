import React from 'react';

function Tour({ tour }) {
  const { id, name, image } = tour;

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <hr />
    </div>
  );
}

export default Tour;
