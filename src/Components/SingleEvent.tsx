import React from 'react';
import { Card } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const SingleEvent = ({ name, description, duration, color }) => {
  const baseHeight = 50;

  const calcHeight = duration * baseHeight;

  console.log(calcHeight);

  return (
    <div>
      <Card
        style={{
          maxHeight: calcHeight,
          height: calcHeight,
          background: color,
        }}
      >
        <Card.Title>{name}</Card.Title>
        <Card.Body style={{ marginTop: '-20px' }}>{description}</Card.Body>
      </Card>
    </div>
  );
};

export default SingleEvent;
