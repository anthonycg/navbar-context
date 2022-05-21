import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import NavBar from './components/NavBar';
import { createContext, useState } from 'react';
import NameContext from "./context/Name"


function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <header className="App-header">
      
      <NameContext.Provider value={{username}}>
      <NavBar />
      <Form />
      </NameContext.Provider>
      </header>
    </div>
  );
}

export default App;
