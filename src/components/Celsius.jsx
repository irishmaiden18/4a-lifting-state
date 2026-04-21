import { useState } from "react";

// temperature is our shared state. both this component and Fahrenheit have access to the same state variable but perform their own respective calculations as needed
const Celsius = ({temperature, handleTemperatureChange, scale}) => {
//   const [temperature, setTemperature] = useState(0)

// determining whether we need to perform a conversion or not
const celsius = scale === "c" ? temperature : ((temperature - 32) * 5) / 9

  return (
    <div>
      <label>Celsius: </label>
      <input type="number" value={celsius} onChange={(event) => handleTemperatureChange(event.target.value)} />
    </div>
  );
};

export default Celsius;