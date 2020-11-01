import React, { Component } from 'react';

import './RealDetail.css';

import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';

class RealDetail extends Component {

  componentDidMount() {
    this.props.onGetHero(this.props.match.params.id);
  }

  render() {
    let name = '';
    let age = '';
    if (this.props.selectedHero) {
      name = this.props.selectedHero.name;
      age = this.props.selectedHero.age;
    }
    return (
      <div className="RealDetail" >
        <div className="row">
          <div className="left">
            Name:
        </div>
          <div className="right">
            {name}
          </div>
        </div>
        <div className="row">
          <div className="left">
            Age:
        </div>
          <div className="right">
            {age}
          </div>
        </div>
        <button className="back-button"
          onClick={() => this.props.history.push('/heros')}>
          Back
        </button>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    selectedHero: state.hero.selectedHero,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetHero: id =>
      dispatch(actionCreators.getHero(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RealDetail);