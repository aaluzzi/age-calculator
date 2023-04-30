import AgeDisplay from './AgeDisplay';
import AgeForm from './AgeForm';
import { useState } from 'react';

const themes = ["Blue", "Green", "Orange", "Pink", "Purple", "Red"];

function App() {
  const query = new URLSearchParams(window.location.search);
  const birthday = query.get("birthday") ? new Date(query.get("birthday") + (query.get("birthday").includes("T") ? "" : "T00:00")) : null;
  const name = query.get("name");
  const [theme, setTheme] = useState((themes[query.get("color")] ? themes[query.get("color")].toLowerCase() : "blue") + "-theme");


  if (birthday === null || isNaN(birthday) || birthday > new Date()) {
    return (
      <div className={"App " + theme}>
        <AgeForm themes={themes} changeTheme={(index => {
          setTheme(themes[index].toLowerCase() + "-theme")
        })}/>
      </div>
    );
  }
  return (
    <div className={"App " + theme}>
        <AgeDisplay birthday={birthday} name={name}/>
    </div>
  );
}

export default App;
