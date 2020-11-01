import React, { Component } from 'react';

import './NewHero.css';

import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';

class NewHero extends Component {
  state = {
    name: '',
    age: '',
  }

  postHeroHandler = () => {
    this.props.onStoreHero(this.state.name, this.state.age);
  }

  render() {
    return (
      <div className="NewHero">
        <h1>Add a New Hero!</h1>
        <label>Name</label>
        <input
          type="text"
          value={this.state.name}
          onChange={(event) => this.setState({ name: event.target.value })}
        ></input>
        <label>Age</label>
        <textarea type="text" value={this.state.age}
          onChange={(event) => this.setState({ age: event.target.value })}
        >
        </textarea>
        <button onClick={() => this.postHeroHandler()}>Submit</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onStoreHero: (name, age) =>
      dispatch(actionCreators.postHero({ name: name, age: age })),
  }
};

export default connect(null, mapDispatchToProps)(NewHero);