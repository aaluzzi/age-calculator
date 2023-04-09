import ProgressBar from './ProgressBar';
import { useState, useEffect } from 'react';

const birthday = new Date(1999, 6, 17);

function App() {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setAge(getExactAge(birthday, new Date())), 10);
    return () => clearInterval(id);  
  }, []);

  return (
    <div className="App">
        <div className="age-info">
          <div>You are</div>
          <div className="age">{age}</div>
          <div>years old</div>
        </div>
        <div className="graphic">
          <ProgressBar age={Math.floor(age)} percentage={age - Math.floor(age)} />
        </div>
    </div>
  );
}

const MILLI_IN_YEAR = 31_536_000_000;

function getExactAge(birthday, now) {
    return ((getYearsOld(birthday, now) + getPercentageToBirthdayThisYear(birthday, now)) + "000000000").slice(0, 12);
}

//if birthday passed this year, percentage will be > 1
function getPercentageToBirthdayThisYear(birthday, now) {
    let birthdayLastYear = new Date(birthday.valueOf());
    birthdayLastYear.setFullYear(now.getFullYear() - 1);
    return (now - birthdayLastYear) / MILLI_IN_YEAR;
}

function getYearsOld(birthday, now) {
    return now.getFullYear() - birthday.getFullYear() - 1;
}

export default App;
