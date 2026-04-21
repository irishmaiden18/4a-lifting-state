

import { useState } from "react"
import Celsius from "./components/Celsius"
import Fahrenheit from "./components/Fahrenheit"

function App() {

  /*
    Lifting State
    - instead of having separate state variables for our Fahrenheit and Celsius components, we list the temperature state to the closest parent (App.jsx) and pass that inot each component as props
    - we create a state variable , scale, to keep track of whether we are converting from F to C or C to F
  */
  const [temperature, setTemperature] = useState(0)
  const [scale, setScale] = useState("f") // f or c

  // sets scale to f meaning we take the value as is for Fahrenheit, but we perform a conversion for Celsius
  const handleFahrenheit = (value) => {
    setTemperature(value)
    setScale("f")
  }

  // sets scale to c meaning we take the value as is for Celsius, but we perform a conversion for Fahrenheit
  const handleCelsius = (value) => {
    setTemperature(value)
    setScale("c")
  }

  return (
    <>
      <h1>4A - Lifting State</h1>
      <Fahrenheit temperature={temperature} handleTemperatureChange={handleFahrenheit} scale={scale}/>
      <Celsius temperature={temperature} handleTemperatureChange={handleCelsius} scale={scale}/>
    </>
  )
}

export default App
