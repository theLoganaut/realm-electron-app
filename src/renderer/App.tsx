import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Card, Button, Container, Col, Row } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import useInterval from 'Components/useIntervalHook';
import SingleEvent from 'Components/SingleEvent';
// import fetch from 'electron-fetch';
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

  const weatherSampleStart = {
    coord: {
      lon: -97.62,
      lat: 30.4394,
    },
    weather: [
      {
        id: 701,
        main: 'Mist',
        description: 'mist',
        icon: '50d',
      },
    ],
    base: 'stations',
    main: {
      temp: 57.54,
      feels_like: 57.42,
      temp_min: 55.35,
      temp_max: 60.4,
      pressure: 1012,
      humidity: 94,
    },
    visibility: 9656,
    wind: {
      speed: 3,
      deg: 284,
      gust: 5.99,
    },
    clouds: {
      all: 100,
    },
    dt: 1643742894,
    sys: {
      type: 2,
      id: 2011221,
      country: 'US',
      sunrise: 1643721686,
      sunset: 1643760398,
    },
    timezone: -21600,
    id: 4718711,
    name: 'Pflugerville',
    cod: 200,
  };

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

  useInterval(
    () => {
      setMarginTopJS(marginTopJS + 1);
    },
    isRunning ? delay : null
    // 49800 for 12 hour screen
  );

  const currentDateString = new Date().toLocaleDateString();
  const currentTime = new Date();

  const dateUNIX = Math.floor(currentTime.getTime() / 1000);

  const [weatherJSON, setWeatherJSON] = useState(weatherSampleStart);
  // eslint-disable-next-line consistent-return
  const getWeatherData = async () => {
    if (weatherJSON.dt + 7200000 - 19070000 > dateUNIX)
      try {
        // eslint-disable-next-line promise/catch-or-return
        const weatherData = await fetch(
          'https://api.openweathermap.org/data/2.5/weather?q=Pflugerville&units=imperial&appid=819bebd635233ab8f206b89b983f20ae'
        )
          .then((response) => response.json())
          .then((json) => setWeatherJSON(json));
      } catch (e) {
        console.log(e);
      }
  };

  const [showDescription, setShowDescription] = useState(false);
  useEffect(() => {
    getWeatherData();
    if (mainDescCheck !== desc) {
      setShowDescription(true);
    }
  }, []);

  const dateNum = weatherJSON.dt - 19070000;

  const lastUpdateAround = new Date(dateNum).toLocaleTimeString();

  console.log(currentTime, weatherJSON);

  const mainDescCheck = weatherJSON.weather[0].main.toLowerCase();

  const desc = weatherJSON.weather[0].description;

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
            <Card>
              <Row style={{ marginTop: '5%' }}>
                <Col>
                  <Card.Title style={{ textAlign: 'center' }}>
                    {weatherJSON.name}
                  </Card.Title>
                </Col>
                <Col style={{ textAlign: 'center' }}>
                  <Button onClick={getWeatherData}>Refresh</Button>
                </Col>
              </Row>

              <Card.Body>
                <Row style={{ marginTop: '2%' }}>
                  <Col>
                    <Card.Text style={{ fontSize: '24px' }}>
                      {weatherJSON.weather[0].main}
                    </Card.Text>
                  </Col>
                  {showDescription && (
                    <Col>
                      <Card.Text>
                        {weatherJSON.weather[0].description}
                      </Card.Text>
                    </Col>
                  )}
                </Row>
                <Row style={{ marginTop: '2%' }}>
                  <Col>
                    <Card.Text>
                      Current Temp: {Math.round(weatherJSON.main.temp)}
                    </Card.Text>{' '}
                  </Col>
                  <Col>
                    <Card.Text>
                      Feels Like: {Math.round(weatherJSON.main.feels_like)}
                    </Card.Text>
                  </Col>
                </Row>
                <Row style={{ marginTop: '2%' }}>
                  <Col>
                    <Card.Text>
                      Min: {Math.round(weatherJSON.main.temp_min)}
                    </Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>
                      Max: {Math.round(weatherJSON.main.temp_max)}
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
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
