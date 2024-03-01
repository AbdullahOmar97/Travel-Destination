import React from 'react';
import Tour from './tour/Tour';
import { Link } from 'react-router-dom';

function Tours({ data }) {
  return (
    <div>
      {data.map((tour) => (
        <Link key={tour.id} to={`/tour/${tour.id}`}>
          <Tour tour={tour} />
        </Link>
      ))}
    </div>
  );
}

export default Tours;

