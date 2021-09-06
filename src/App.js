import './App.css';
import { useState } from 'react';
import WelcomePage from './Components/WelcomePage'
import GetUserComponent from './Components/GetUserComponent';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')

  return (
    <div className="App">{
      isLoggedIn ?
        <WelcomePage
          setIsLoggedIn={setIsLoggedIn}
          user={user}
        />
        :
        <GetUserComponent setIsLoggedIn={setIsLoggedIn} setUser={setUser} />

    }
    </div>
  );
}

export default App;
