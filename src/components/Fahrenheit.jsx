import { useState } from "react";

// temperature is our shared state. both this component and Celsius have access to the same state variable but perform their own respective calculations as needed
const Fahrenheit = ({temperature, handleTemperatureChange, scale}) => {
//   const [temperature, setTemperature] = useState(0);

// determining whether we need to perform a conversion or not
const fahrenheit = scale === "f" ? temperature : (temperature * 9) / 5 + 32

  return (
    <div>
      <label>Fahrenheit: </label>
      <input 
        type="number" 
        value={fahrenheit} 
        onChange={(event) => handleTemperatureChange(event.target.value)}
      />
    </div>
  );
};

export default Fahrenheit;
