import AgeDisplay from './AgeDisplay';
import AgeForm from './AgeForm';
import { useState, useEffect } from 'react';

function App() {
  const [birthday, setBirthday] = useState(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    setBirthday(new Date(query.get("birthday")?.replace("-", "/"))); //because Date parsing with hyphen is a different date??
  }, []);

  console.log(birthday);
  if (birthday === null || isNaN(birthday)) {
    return (
      <div className="App">
        <AgeForm />
      </div>
    );
  }
  return (
    <div className="App">
        <AgeDisplay birthday={birthday} />
    </div>
  );
}

export default App;
