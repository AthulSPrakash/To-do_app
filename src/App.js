import { useState } from 'react'
import './App.css';
import NavBar from './components/navBar';
import Todo from './components/todoList'
import Note from './components/note'
import Settings from './components/settings';
import Header from './components/header';

function App() {

  const name = "Settings"
  const [nav,setNav] = useState('To Dos')

  const navCheck = (navData) => {
    setNav(navData)
  }

  return (
    <div className="container">
      <Header title = {nav} />
      <Settings name = {name} />
      { nav === 'To Dos' ? <Todo/> : <Note/> }
      <NavBar navSelection = {navCheck} />
    </div>
  );

}

export default App;