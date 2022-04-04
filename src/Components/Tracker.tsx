import { Card, Button, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Tracker = () => {
  const [lastUpdatedTime, setLastUpdatedTime] = useState(
    Number(localStorage.getItem('lastUpdatedTime'))
  );
  // click increment, if no increment in 24hrs, reset
  const [gymPills, setGymPills] = useState(
    Number(localStorage.getItem('gymPills'))
  );

  // add 1 every 24 hrs, click to reset (2 clicks eventually)
  const [ringCharge, setRingCharge] = useState(
    Number(localStorage.getItem('ringCharge'))
  );
  const [roomClean, setRoomClean] = useState(
    Number(localStorage.getItem('roomClean'))
  );
  const [lastAlcohol, setLastAlcohol] = useState(
    Number(localStorage.getItem('lastAlcohol'))
  );

  // convert to strings
  const ringString = ringCharge.toString();
  const roomString = roomClean.toString();
  const alcoholString = lastAlcohol.toString();
  const lastUpdatedTimeString = lastUpdatedTime.toString();

  const oneday = 60 * 60 * 24 * 1000;

  console.log(lastUpdatedTime);

  // daily auto increments
  useEffect(() => {
    const currentTime = +new Date();
    if (currentTime / 1000 > lastUpdatedTime + oneday) {
      console.log(currentTime, lastUpdatedTime, oneday);
      console.log(currentTime - lastUpdatedTime);
      setRingCharge((i) => i + 1);
      setRoomClean((i) => i + 1);
      setLastAlcohol((i) => i + 1);
      setLastUpdatedTime(currentTime);
    }
  }, [oneday, lastUpdatedTime]);

  useEffect(() => {
    localStorage.setItem('ringCharge', ringString);
    localStorage.setItem('roomClean', roomString);
    localStorage.setItem('lastAlcohol', alcoholString);
    localStorage.setItem('lastUpdatedTime', lastUpdatedTimeString);
  }, [alcoholString, lastUpdatedTimeString, ringString, roomString]);

  // click to increment
  useEffect(() => {
    const stringd = gymPills.toString();
    localStorage.setItem('ringCharge', stringd);
  }, [gymPills]);

  const increment = () => {
    setGymPills((i) => i + 1);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Col>
            <Card.Text>
              🔌⬇{ringCharge} days since ring charge{' '}
              <Button
                style={{ float: 'right' }}
                onClick={() => setRingCharge(0)}
              >
                Charged!
              </Button>
            </Card.Text>

            <Card.Text>
              💪{gymPills} days of gym & pills
              <Button
                size="sm"
                style={{ float: 'right' }}
                onClick={() => setGymPills(0)}
              >
                missed..
              </Button>
              <Button style={{ float: 'right' }} onClick={increment}>
                Smashed!
              </Button>
            </Card.Text>
            <Card.Text>
              🧹{roomClean} days since full room clean
              <Button
                style={{ float: 'right' }}
                onClick={() => setRoomClean(0)}
              >
                Cleaned!
              </Button>
            </Card.Text>
            <Card.Text>
              🥃{lastAlcohol} days since last alcohol{' '}
              <Button
                style={{ float: 'right' }}
                onClick={() => setLastAlcohol(0)}
              >
                Drunk!
              </Button>
            </Card.Text>
          </Col>
        </Card.Body>
      </Card>
    </>
  );
};

export default Tracker;
