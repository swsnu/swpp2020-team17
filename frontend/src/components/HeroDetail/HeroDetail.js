import React from 'react';

import './HeroDetail.css';

class HeroDetail extends React.Component {
  render() {
    return (
      <div className="HeroDetail" >
        <div className="row">
          <div className="left">
            Name:
        </div>
          <div className="right">
            {this.props.name}
          </div>
        </div>
        <div className="row">
          <div className="left">
            Age:
        </div>
          <div className="right">
            {this.props.age}
          </div>
        </div>
      </div>
    );
  }
};

export default HeroDetail;