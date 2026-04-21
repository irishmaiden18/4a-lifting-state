

import { useEffect, useState } from "react"
import Celsius from "./components/Celsius"
import Fahrenheit from "./components/Fahrenheit"
import ProgrammerForm from "./components/ProgrammerForm"
import ProgrammerList from "./components/ProgrammerList"

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

  //////////////////////////////////////////////////////////////
  // setting up our programmers state that can be accessed by both our List and Form
  const [programmers, setProgrammers] = useState([
    {id: 1, username: "user170", language: "Java"}
  ])

  // function to add programmer to the list, accessed from inside the Form onSubmit
  const addProgrammer = (programmer) => {
    setProgrammers([...programmers, programmer])
  }

  // useEffect (() => {
  //   console.log(programmers)
  // }, [programmers])

  return (
    <>
      <h1>4A - Lifting State</h1>
      <Fahrenheit 
        temperature={temperature} 
        handleTemperatureChange={handleFahrenheit} 
        scale={scale}
      />
      <Celsius 
        temperature={temperature} 
        handleTemperatureChange={handleCelsius} 
        scale={scale}
      />
      <ProgrammerForm addProgrammer={addProgrammer}/>
      {/* passing programmers as props to display them in their own component */}
      <ProgrammerList programmers={programmers}/>
    </>
  )
}

export default App
