import { useState } from "react";


const ToggleSwitch=({name}:any)=>  {
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
};
console.log(isChecked)
    return (
      <>
          <label className="switch" htmlFor={name}>
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name={name}
          id={name}
          value={name}
          checked={isChecked}
          onChange={handleOnChange}
    
          />
        <span className="slider"></span>
        </label>
      
          </>
    );
  }


export default ToggleSwitch;