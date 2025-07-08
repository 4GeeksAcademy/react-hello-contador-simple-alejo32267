import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

// Crea el componente SimpleCounter

const SimpleCounter = (props) => {
let clock = 6
let counter = props.counter.toString().padStart(clock, "0").split("").map(Number)
  return (
    <div className="container">
            <div className="card">
                <h1><FontAwesomeIcon icon={faClock} flip="horizontal" /></h1>
            </div>
            <div className="card">
                <h1>{counter[0]}</h1>
            </div>
            <div className="card">
                <h1>{counter[1]}</h1>
            </div>
            <div className="card">
                <h1>{counter[2]}</h1>
            </div>
            <div className="card">
                <h1>{counter[3]}</h1>
            </div>
            <div className="card">
                <h1>{counter[4]}</h1>
            </div>
            <div className="card">
                <h1>{counter[5]}</h1>
            </div>
        </div>
  );
};

// Crea tu primer componente Home
const Home = (props) => {
  return (
    <div>
      <SimpleCounter 
      {...props}
      />
    </div>
	
  );
};

export default Home;
