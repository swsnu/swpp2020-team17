import React from 'react';

import './TodoDetail.css';

class TodoDetail extends React.Component {
  render() {
    return (
      <div className="TodoDetail" >
        <div className="row">
          <div className="left">
            Name:
        </div>
          <div className="right">
            {this.props.title}
          </div>
        </div>
        <div className="row">
          <div className="left">
            Content:
        </div>
          <div className="right">
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
};

export default TodoDetail;