import React from 'react';

function Tours({ data }) {
  return (
    <div>
      {data.map((tour) => (
        <div key={tour.id}>
          <h2>{tour.name}</h2>
          <img src={tour.image} alt={tour.name} />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Tours;