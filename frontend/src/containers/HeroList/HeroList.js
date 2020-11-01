import React, { Component } from 'react';

import Hero from '../../components/Hero/Hero';

import { NavLink } from 'react-router-dom';

import './HeroList.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as actionCreators  from '../../store/actions/index';

class HeroList extends Component {
  componentDidMount() {
    this.props.onGetAll();
  }

  clickHeroHandler = (hero) => {
    this.props.history.push('/heros/' + hero.id);
  }

  render() {
    const heros = this.props.storedHeros.map(hero => {
      return (
        <Hero
          key={hero.id}
          name={hero.name}
          clickDetail={() => this.clickHeroHandler(hero)}
        />
      );
    });

    return (
      <div className="HeroList">
        <div className='title'>
          {this.props.title}
        </div>
        {heros}
        <div className='button-container'>
          <NavLink className='new-hero-button' to='/new-hero' exact>New Hero</NavLink>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    storedHeros: state.hero.heros,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onGetAll: () =>
      dispatch(actionCreators.getHeros())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeroList));