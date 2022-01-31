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
  const [margin, setMargin] = useState(-800);

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
      color: 'darkgray',
    },
    {
      name: 'Nightly Routine',
      description: 'zzZ',
      duration: 1,
      color: 'darkcyan',
    },
    {
      name: 'Gamin',
      description: 'League/Super People/Cities/Singleplayer',
      duration: 3.5,
      color: 'mediumseagreen',
    },
    {
      name: 'Dinner/Chillin',
      description: 'League/Super People/Cities/Singleplayer',
      duration: 1,
      color: 'slategray',
    },
    {
      name: 'Coding',
      description: 'LIPIMS work',
      duration: 1,
      color: 'deepskyblue',
    },
    {
      name: 'Cleaning',
      description: 'Proteins and lunch',
      duration: 0.5,
      color: 'khaki',
    },
    {
      name: 'Coding',
      description: 'REALM work',
      duration: 4,
      color: 'indianred',
    },
    {
      name: 'Lunch Break',
      description: 'Chimichanga',
      duration: 1,
      color: 'goldenrod',
    },
    {
      name: 'Coding',
      description: 'LIPIMS work',
      duration: 3,
      color: 'deepskyblue',
    },
    {
      name: 'Gymming',
      description: 'Chest',
      duration: 1,
      color: 'lightslategray',
    },
  ];

  // this converts the weird dt into a human readable time

  const weirdDT = new Date(1643415998).toLocaleTimeString('en-us');

  console.log(weirdDT);

  useInterval(
    () => {
      setMarginTopJS(marginTopJS + 1);
      console.log('incremented');
    },
    isRunning ? delay : null
    // 49800 for 12 hour screen
  );

  // const eventBlock = document.getElementById('event-block');

  // function rafAsync() {
  //   return new Promise((resolve) => {
  //     requestAnimationFrame(resolve); // faster than set time out
  //   });
  // }

  // async function checkElement(selector) {
  //   const querySelector = null;
  //   while (querySelector === null) {
  //     await rafAsync();
  //     querySelector = document.querySelector(selector);
  //   }
  //   return querySelector;
  // }

  // checkElement(eventBlock) // use whichever selector you want
  //   .then((element) => {
  //     const height = element.clientHeight;
  //     return console.log('height', height);
  //     // Do whatever you want now the element is there
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });

  // console.log('height of events', getEventBlockHeight);
  // console.log('height of marker', getTimeMarkerLocation);

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
          width: '100vw',
          overflow: 'scroll',
        }}
        fluid
      >
        <Row>
          <Col>
            <div style={{ display: 'flex' }}>
              <div
                id="time-marker"
                style={{
                  fontSize: '70px',
                  marginTop: '350px',
                  zIndex: 2,
                }}
              >
                &#62;
              </div>
              <div
                id="event-block"
                style={{
                  width: '30rem',
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
                      color={e.color}
                    />
                  );
                })}
              </div>
            </div>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title style={{ fontSize: '20px' }}>🔌3⬇</Card.Title>
                <Button> Decrement </Button>
                <Button
                  variant="primary"
                  onClick={() => setIsRunning(!isRunning)}
                >
                  Start Scrolling
                </Button>
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
