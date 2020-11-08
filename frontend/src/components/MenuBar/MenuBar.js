// // Importing React Components
// import React, { Component } from 'react';

// // Importing AntDesign Components
// import { Menu } from 'antd';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } `from '@ant-design/icons';


// const MenuBar = props => {

//   const current = props.current;

//   const handleClick = (event) => ({
//     current: event.key,
//   })

//   // handleClick = e => {
//   //   console.log('click ', e);
//   //   current = e.key;
//   //   // this.setState({ current: e.key });
//   //   // this.setState(state => ({ current: e}));
//   // };

//   return(
//       // <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
//       <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
//         <Menu.Item key='post' icon={<MailOutlined />}>
//           Posts
//         </Menu.Item>
//         <Menu.Item key='lobby' disabled icon={<AppstoreOutlined />}>
//           Lobby
//         </Menu.Item>
//         <Menu.Item key='search' disabled icon={<AppstoreOutlined />}>
//           Search
//         </Menu.Item>
//         <Menu.Item key='mypage' icon={<MailOutlined />}>
//           {/* <a href="https://ant.design" target="_blank" rel="noopener noreferrer"> */}
//           MyPage
//           {/* </a> */}
//         </Menu.Item>
//         {/* <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
//           <Menu.ItemGroup title="Item 1">
//             <Menu.Item key="setting:1">Option 1</Menu.Item>
//             <Menu.Item key="setting:2">Option 2</Menu.Item>
//           </Menu.ItemGroup>
//           <Menu.ItemGroup title="Item 2">
//             <Menu.Item key="setting:3">Option 3</Menu.Item>
//             <Menu.Item key="setting:4">Option 4</Menu.Item>
//           </Menu.ItemGroup>
//         </SubMenu> */}
//       </Menu>
//   );
//   // Change and set state of ...


//     // return (
//     // // console.log(this.props.current)
//     // );

//   // state = {
//   //   current: null,
//   // }

// }

// import React from 'react'; 
// import './MenuBar.css';

// const MenuBar = props => {
//     return (
//         <div class="topnav">
//           <a href="http://localhost:3000/">Posts</a>
//           <a href="http://localhost:3000/lobby/">Lobby</a>
//           <a href="http://localhost:3000/search/">Search</a>
//           <a href="http://localhost:3000/mypage">MyPage</a>
//         </div>
//     )
// };

// export default MenuBar;

// class MenuBar {

//   render() {
//     const {sampleStr} = "MenuBar";
//     return (
//       sampleStr
//     )
//   }
// }
// export default MenuBar;

import React, { Component } from 'react';

import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props,
    }
  }
  // state = {
  //   current: 'mail',
  // };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;

    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="1" icon={<MailOutlined />}>
          Posts
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default MenuBar;
