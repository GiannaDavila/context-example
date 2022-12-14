
import { useState, createContext } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState('G')
  return (
  <UserContext.Provider value={{user, setUser}}>
  <Header/>
  <Main/> 
  </UserContext.Provider>
  );
}

export default App;
