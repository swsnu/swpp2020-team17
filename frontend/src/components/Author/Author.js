import React, { Component } from 'react';
import { connect } from 'react-redux'

const Author = props => {

    return (
        <div className="image"></div>
        <div className="username"></div>
        <div className="login"></div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(Author)