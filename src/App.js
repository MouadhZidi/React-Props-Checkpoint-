import Profile from './profile/Profile';
import './App.css';

function App() {
  let fullName = "Mouadh Zidi"
  let bio = 28
  let profession = "developer student"

  let handleName=(name)=>{
  alert(name)
  }

  return (
    <div>
      <Profile name={fullName} age={bio} pro={profession} alrt={handleName} />

    </div>

  );
}


export default App;
