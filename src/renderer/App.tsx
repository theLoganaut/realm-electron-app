import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Card, Button, Container, Col, Row } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import useInterval from 'Component/useIntervalHook';
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
          width: '100vw',
        }}
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
                <Card>
                  <Card.Body
                    style={{ backgroundColor: 'lightgoldenrodyellow' }}
                  >
                    <Card.Title>WoodWorking</Card.Title>
                    <Card.Text>Cleaning Shed</Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body style={{ backgroundColor: 'lightseagreen' }}>
                    <Card.Title>Gaming</Card.Title>
                    <Card.Text>boolin</Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body style={{ backgroundColor: 'lightblue' }}>
                    <Card.Title>Working Out</Card.Title>
                    <Card.Text>Chest Day, focus on ____</Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body style={{ backgroundColor: 'lightsalmon' }}>
                    <Card.Title>Coding</Card.Title>
                    <Card.Text>Working on REALM</Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body style={{ backgroundColor: 'lightcoral' }}>
                    <Card.Title>Coding</Card.Title>
                    <Card.Text>Working on LIPIMS</Card.Text>
                  </Card.Body>
                </Card>
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
              </Card.Body>
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
