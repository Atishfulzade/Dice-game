
import reactLogo from './assets/Dice.png'
import Start from './components/Start'
import './App.css'
import { useState } from 'react'
import Main from './components/Main'
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const startGame = () => {
    setIsGameStarted((prev) => !prev)
  }
  return <>
    {isGameStarted ? <Main /> : <Start startGame={startGame} />}
  </>

}

export default App
