import React from 'react';
import { Card } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const SingleEvent = ({ name, description, duration }) => {
  const baseHeight = 100;

  const calcHeight = duration * baseHeight;

  return (
    <div>
      <Card style={{ height: calcHeight }}>
        <Card.Title>{name}</Card.Title>
        <Card.Body>{description}</Card.Body>
      </Card>
    </div>
  );
};

export default SingleEvent;
