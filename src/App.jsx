import { useState } from 'react'
import './App.css'
import CountdownTimer from './CountdownTimer'

function App() {

  const [showFlower, setShowFlower] = useState(false);

  const handleGiveFlower = () => {
    setShowFlower(true);

    setTimeout(() => {
      setShowFlower(false);
    }, 1000);
  };

  return (
    <div className='main'>

      <div className="flower-container">
      {showFlower && <div className="flower"></div>}
      </div>
    

    <h1>Time Till were together</h1>
    <CountdownTimer />

    <button onClick={handleGiveFlower}>Press to give Teebs a flower</button>
      


      
    </div>
  )
}

export default App
