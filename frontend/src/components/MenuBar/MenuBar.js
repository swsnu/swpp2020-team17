import React from 'react'; 
import './MenuBar.css';

const MenuBar = props => {
    return (
        <div className="topnav">
          <a href="http://localhost:3000/">Posts</a>
          <a href="http://localhost:3000/lobby/">Lobby</a>
          <a href="http://localhost:3000/search/">Search</a>
          <a href="http://localhost:3000/mypage">MyPage</a>
        </div>
    )
};

export default MenuBar;
