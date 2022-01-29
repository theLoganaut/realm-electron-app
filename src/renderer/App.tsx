import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Card, Button, Container, Col, Row } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import useInterval from 'Components/useIntervalHook';
import SingleEvent from 'Components/SingleEvent';
// import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  // const eventBlocks = document.getElementById('event-blocks');
  // const refEventBlocks = useRef(eventBlocks);
  const [margin, setMargin] = useState(0);

  const [testShow, setTestShow] = useState(false);

  const [testEleCSS, setTestEleCSS] = useState('black');

  const [marginTopJS, setMarginTopJS] = useState(margin);

  const [isRunning, setIsRunning] = useState(false);
  const [delay, setDelay] = useState(500);

  // const lowerEleBlock = () => {
  //   const place = margin + 10;
  //   setMargin(place);
  //   console.log(marginTopJS);
  //   setMarginTopJS(margin);
  // };

  const placeholderJSON = [
    {
      name: 'Dreaming',
      description: 'zzZ',
      duration: 8,
    },
    {
      name: 'Gamin',
      description: 'League/Super People/Cities/Singleplayer',
      duration: 1,
    },
    {
      name: 'Coding',
      description: 'LIPIMS work',
      duration: 1,
    },
    {
      name: 'Cleaning',
      description: 'Proteins and lunch',
      duration: 0.5,
    },
    {
      name: 'Coding',
      description: 'REALM work',
      duration: 3,
    },
    {
      name: 'Lunch Break',
      description: 'Chimichanga',
      duration: 1,
    },
    {
      name: 'Coding',
      description: 'LIPIMS work',
      duration: 3,
    },
    {
      name: 'Gymming',
      description: 'Chest',
      duration: 1,
    },
  ];

  //this converts the weird dt into a human readable time

  const weirdDT = new Date(1643415998).toLocaleTimeString('en-us');

  console.log(weirdDT);

  useInterval(
    () => {
      setMarginTopJS(marginTopJS + 1);
    },
    isRunning ? delay : null
  );

  // useEffect(() => {
  //   const lowerEleBlock = window.setInterval(() => {
  //     setMarginTopJS((margin) => margin + 10);
  //   }, 1000);
  //   return () => {
  //     window.clearInterval(lowerEleBlock);
  //   };
  // }, []);

  // useEffect(() => {

  // })

  return (
    <div>
      <Container
        style={{
          height: '100vh',
          backgroundColor: 'lightblue',
          width: '640px',
        }}
        fluid
      >
        <Row>
          <Col>
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  fontSize: '70px',
                  top: '90%',
                  zIndex: 2,
                  marginTop: '100%',
                }}
              >
                &#62;
              </div>
              <div
                style={{
                  width: '18rem',
                  marginLeft: '-5%',
                  marginTop: marginTopJS,
                }}
              >
                {placeholderJSON.map((e) => {
                  return (
                    <SingleEvent
                      name={e.name}
                      description={e.description}
                      duration={e.duration}
                    />
                  );
                })}

                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Button
                      variant="primary"
                      onClick={() => setIsRunning(!isRunning)}
                    >
                      Start Scrolling
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>
          <Col>
            <Card style={{ width: '6rem' }}>
              <Card.Body>
                <Card.Title style={{ fontSize: '20px' }}>🔌3⬇</Card.Title>
                <Button> Decrement </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title style={{ fontSize: '20px' }}>🧹1⬇</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ height: '50%' }}>
              <Card.Body>weather info here</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
