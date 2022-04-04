import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Card, Button, Container, Col, Row } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import useInterval from 'Components/useIntervalHook';
import SingleEvent from 'Components/SingleEvent';
import eventBlock from 'Components/eventManager';
import Weather from 'Components/Weather';
import Tracker from 'Components/Tracker';
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

  // const [weatherJSON, setWeatherJSON] = useState(weatherSampleStart);
  // // eslint-disable-next-line consistent-return
  // const getWeatherData = async () => {
  //   if (weatherJSON.dt + 7200000 - 19070000 > dateUNIX)
  //     try {
  //       // eslint-disable-next-line promise/catch-or-return
  //       const weatherData = await fetch(
  //         'https://api.openweathermap.org/data/2.5/weather?q=Pflugerville&units=imperial&appid=819bebd635233ab8f206b89b983f20ae'
  //       )
  //         .then((response) => response.json())
  //         .then((json) => setWeatherJSON(json));
  //     } catch (e) {
  //       console.log(e);
  //     }
  // };

  // const mainDescCheck = weatherJSON.weather[0].main.toLowerCase();

  // const desc = weatherJSON.weather[0].description;

  // const [showDescription, setShowDescription] = useState(false);
  // // useEffect(() => {
  // //   getWeatherData();
  // //   if (mainDescCheck !== desc) {
  // //     setShowDescription(true);
  // //   }
  // // });

  // const dateNum = weatherJSON.dt - 19070000;

  // const lastUpdateAround = new Date(dateNum).toLocaleTimeString();

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
          {/* <Col>
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
                {eventBlock[0].map((e) => {
                  return (
                    <SingleEvent
                      name={e.title}
                      description={e.desc}
                      duration={e.duration}
                      color={e.color}
                    />
                  );
                })}
              </div>
            </div>
          </Col> */}
          <Col>
            <Tracker />
            <Weather />
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
