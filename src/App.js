import AgeDisplay from './AgeDisplay';
import AgeForm from './AgeForm';
import { useState, useEffect } from 'react';

function App() {
  const [birthday, setBirthday] = useState(null);
  const [name, setName] = useState("");
  const [measurement, setMeasurement] = useState("years");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    setBirthday(new Date(query.get("birthday")?.replace("-", "/"))); //because Date parsing with hyphen is a different date??
    setName(query.get("name"));
  }, []);

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
