import AgeDisplay from './AgeDisplay';
import AgeForm from './AgeForm';

function App() {
  const query = new URLSearchParams(window.location.search);
  const birthday = query.get("birthday") ? new Date(query.get("birthday")) : null;
  const name = query.get("name");

  if (birthday === null || isNaN(birthday) || birthday > new Date()) {
    return (
      <div className="App">
        <AgeForm />
      </div>
    );
  }
  return (
    <div className="App">
        <AgeDisplay birthday={birthday} name={name}/>
    </div>
  );
}

export default App;
