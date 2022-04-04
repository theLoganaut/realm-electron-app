import { Card, Row, Col, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Weather = () => {
  const weatherSampleStart = {
    coord: {
      lon: '',
      lat: '',
    },
    weather: [
      {
        id: '',
        main: '',
        description: '',
        icon: '',
      },
    ],
    base: 'stations',
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
    },
    visibility: '',
    wind: {
      speed: 0,
      deg: 0,
      gust: 0,
    },
    clouds: {
      all: '',
    },
    dt: '',
    sys: {
      type: '',
      id: '',
      country: 'US',
      sunrise: '',
      sunset: '',
    },
    timezone: -21600,
    id: '',
    name: '',
    cod: '',
  };

  const [weather, setWeather] = useState(
    weatherSampleStart
    // JSON.parse(localStorage.getItem('weather'))
  );

  const apiURL =
    'http://api.openweathermap.org/data/2.5/weather?q=Pflugerville&units=imperial&appid=819bebd635233ab8f206b89b983f20ae';

  // const [request, response] = useFetch(
  //   'api.openweathermap.org/data/2.5/weather?q=Pflugerville&units=imperial&appid=819bebd635233ab8f206b89b983f20ae'
  // );

  // const handleRefresh = () => request.get();

  // const {
  //   loading,
  //   error,
  //   data = [],
  // } = useFetch(
  //   'api.openweathermap.org/data/2.5/weather?q=Pflugerville&units=imperial&appid=819bebd635233ab8f206b89b983f20ae',
  //   {},
  //   []
  // );

  const getWeather = () => {
    fetch(apiURL)
      .then((data) => data.json())
      .then((i) => {
        console.log(i);
        localStorage.setItem('weather', i.toString());
        return setWeather(i);
        // localStorage.setItem('weather', i);
      })
      .catch((e) => console.log(e));
  };

  // fetch(
  //   'api.openweathermap.org/data/2.5/weather?q=Pflugerville&units=imperial&appid=819bebd635233ab8f206b89b983f20ae'
  // )
  //   .then((res) => res.json())
  //   .catch((e) => console.log(e));

  // useEffect(() => {
  //   fetch(apiURL)
  //     .then((data) => data.json())
  //     .then((i) => {
  //       console.log(i);
  //       return setWeather(i);
  //     })
  //     .catch((e) => console.log(e));
  // }, []);

  // console.log(weather);

  return (
    <>
      <Card>
        <Row style={{ marginTop: '5%' }}>
          <Col>
            <Card.Title style={{ textAlign: 'center' }}>
              {weather.name}
            </Card.Title>
          </Col>
          <Col style={{ textAlign: 'center' }}>
            <Button onClick={getWeather}>Refresh</Button>
          </Col>
        </Row>

        <Card.Body>
          <Row style={{ marginTop: '2%' }}>
            <Col>
              <Card.Text style={{ fontSize: '24px' }}>
                {weather.weather[0].main}
              </Card.Text>
            </Col>
            {/* {showDescription && ( */}
            <Col>
              <Card.Text>{weather.weather[0].description}</Card.Text>
            </Col>
            {/* )} */}
          </Row>
          <Row style={{ marginTop: '2%' }}>
            <Col>
              <Card.Text>
                Current Temp: {Math.round(weather.main.temp)}
              </Card.Text>{' '}
            </Col>
            <Col>
              <Card.Text>
                Feels Like: {Math.round(weather.main.feels_like)}
              </Card.Text>
            </Col>
          </Row>
          <Row style={{ marginTop: '2%' }}>
            <Col>
              <Card.Text>Min: {Math.round(weather.main.temp_min)}</Card.Text>
            </Col>
            <Col>
              <Card.Text>Max: {Math.round(weather.main.temp_max)}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Weather;
