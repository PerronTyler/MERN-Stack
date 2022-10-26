import { useState } from 'react'
import './App.css'
import ColorForm from './components/functionalComponents/ColorForm'
import BoxDisplay from './components/functionalComponents/BoxDisplay'

function App() {
  const [boxes, setBoxes] = useState([]);
  const addBox = (box) => {
    setBoxes([...boxes, box]);
  }
  const boxElements = boxes.map(box => <BoxDisplay color={ box.color }/>)
  console.log(boxes);
  return (
    <div className="App">
      <ColorForm handleSubmit={ addBox }/>
      { boxElements }
    </div>
  )
}

export default App
