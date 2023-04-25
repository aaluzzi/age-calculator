import AgeDisplay from './AgeDisplay';
import AgeForm from './AgeForm';
import { useState } from 'react';

function App() {
  const query = new URLSearchParams(window.location.search);
  const birthday = query.get("birthday") ? new Date(query.get("birthday")) : null;
  const name = query.get("name");

  const [measurement, setMeasurement] = useState("years");

  if (birthday === null || isNaN(birthday)) {
    return (
      <div className="App">
        <AgeForm />
      </div>
    );
  }
  return (
    <div className="App" onClick={() => {
      if (measurement === "days") {
        setMeasurement("years");
      } else {
        setMeasurement("days");
      }
    }}>
        <AgeDisplay birthday={birthday} name={name} measurement={measurement}/>
    </div>
  );
}

export default App;
