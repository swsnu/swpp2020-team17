import React from 'react';

import './Hero.css';

const Hero = (props) => {
  return (
    <div className="Hero">
      <div className="text" onClick={props.clickDetail}>
        {props.name}
      </div>
    </div>
  );
};

export default Hero;