import { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import Advice from './components/Advice';
import Time from './components/Time';
import Info from './components/Info';
import Conditional from './components/Conditional';

function App() {
  const [advice, setAdvice] = useState('Never Give Up, Be Hardworker, Be a Fit');
  const [time2, setTime2] = useState('');
  const [time3, setTime3] = useState('');
  const [time, setTime] = useState('');
  const [dayOfTheY,setDayOfTheY] = useState('')
  const [dayOfTheW,setDayOfTheW] = useState('')
  const [rotate,setRotate] = useState(false)
  const [rotate2,setRotate2] = useState(false)
  const [gaqroba,setGaqroba] = useState(false)

  const fetchData = () => {
    Axios.get('https://api.adviceslip.com/advice')
      .then((res) => {
        setAdvice(res.data.slip.advice);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  };

  const fetchData2 = () => {
    Axios.get('http://worldtimeapi.org/api/ip')
      .then((res) => {
        setTime2(res.data.datetime);
        setTime3(res.data.timezone);
        setDayOfTheY(res.data.day_of_year)
        setDayOfTheW(res.data.day_of_week)
        console.log(res.data);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  };

  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime >= 5 && currentTime < 12) {
      setTime('GOOD MORNING');
    } else if (currentTime >= 12 && currentTime < 18) {
      setTime('GOOD AFTERNOON');
    } else {
      setTime('GOOD EVENING');
    }
    fetchData2();
  }, []);

  const rotateIcon = () => {
    setRotate((rot) => !rot)
  }
  const rotateIcon2 = () => {
    setRotate2((rot2) => !rot2)
  }


  return (
    <>
      <div>
        
        <Advice
        advice={advice}
        fetchData={fetchData}
        rotate2={rotate2}
        rotateIcon2={rotateIcon2}
        />

        <Time
          time={time}
          time2={time2}
          time3={time3}
        />

        <Info
        gaqroba={gaqroba}
        rotate={rotate}
        rotateIcon={rotateIcon}
        setGaqroba={setGaqroba}
        />
        
        <Conditional
        dayOfTheW={dayOfTheW}
        dayOfTheY={dayOfTheY}
        gaqroba={gaqroba}
        time3={time3}

        />
      </div>
    </>
  );
}

export default App;
