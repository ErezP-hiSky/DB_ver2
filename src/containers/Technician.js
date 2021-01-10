import React, { useState } from 'react';
import './Technician.css';

function Home() {

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [tests, setTests] = useState("");
  const [unitSN, setunitSN] = useState("");

  function handleClick() {
    alert(`name- ${name} date ${date} tests ${tests} unitSN ${unitSN}!`);
  }

  function handleChange(e) {
    const inputName = e.target.name;
    const inputVal = e.target.value;
    
    switch (inputName) {
      case "name":
        setName(inputVal);
        break;
      case "start-date":
        setDate(inputVal);
        break;
      case "tests":
        setTests(inputVal);
        break;
      case "unitSN":
        setunitSN(inputVal);
        break;
      default:
        console.log("no input name chosen " + inputName + " " + inputVal);
        break;
    }
  }

  const Checkbox = props => (
    <input type="checkbox"  />
  )
  
  const [state,setState] = useState({ checked: false });

  const handleCheckboxChange = event =>
    setState({ checked: event.target.checked });

  return (
    <div >
        <h1>Technician Page</h1>
        <p >
        Enter the properties you want to search by, and start searching ! 
        </p>
        <br />
        <br />
        <div className="search-fields">
          <div className="name-input">
            <p>name :</p>
            <input className="name-input-field"
            name="name" 
            autoComplete="off"
            onChange={handleChange}/>
          </div>
          <br />
          <div className="name-input">
            <p>date :</p>
            <input className="name-input-field"
              type="date"
              name="start-date" 
              autoComplete="off"
              onChange={handleChange}/>
          </div>
          <br />
          <div className="tests-input">
            <p>tests :</p>
            <input className="name-input-field"
              name="tests" 
              autoComplete="off"
              onChange={handleChange}/>

            <label>
              <Checkbox
                checked={state.checked}
                onChange={handleCheckboxChange}
              />
              <span>Label Text</span>
            </label>
                        
          </div>
          <br />
          <div className="name-input">
            <p>unit SN :</p>
            <input className="name-input-field"
              name="unitSN" 
              autoComplete="off"
              onChange={handleChange}/>
          </div>
        </div>
        <div>
          <button type="button" onClick={handleClick} className="search-button">
            Search
          </button>
        </div>
    </div>
  );
}

export default Home;
