// import MenuBar from "../../components/MenuBar/MenuBar"

// import React, { Component } from 'react';
// import "antd/dist/antd.css";
// import {Redirect} from 'react-router-dom';

// // Importing AntDesign Components
// import { Layout } from 'antd';
// // Importing Sub-components
// const { Header, Sider, Content, Footer } = Layout;

// // Import Custom Componetns

// // import MainPost from '../../components/MainPost/MainPost'
// // import MenuBar from '../../components/MenuBar/MenuBar'

// // import ListPosts from "./ListPosts";
// // import CreateNewPost from "../CreatePost/CreateNewPost";
// // import LoginTest from "../LoginTest/LoginTest"

// class Post extends Component {
//     // Save current state of Menu (Container)
//     state = {
//         currentMenu: 'post',
//     };

//     // render() {
//         // return (
//         //     // <div>
//         //     //     {Redirect}
//         //     //     <div className="Menu"></div>
//         //     //     <MenuBar></MenuBar>
//         //     //     <div className="TagWrapper"></div>
//         //     //     <div className="MainPostWrapper">
//         //     //         <MainPost></MainPost>
//         //     //     </div>
//         //     // </div>

//         //     // <div>
//         //         {/* {Redirect} */}
//         //     < Layout >
//         //             <Header>header</Header>
//         //             <Content>
//         //                 <Layout>
//         //                     <Sider>left sidebar</Sider>
//         //                     <Content>main content</Content>
//         //                     <Sider>right sidebar</Sider>
//         //                 </Layout>
//         //             </Content>
//         //             <Footer>footer</Footer>
//         //         </ >
//         //     {/* </div> */}
//         // )

//     render() {
//         const { current } = this.state;
//         // console.log(current)

//         return (
//             <Layout>
//                 <Header>
//                     <MenuBar current='post' />
//                 </Header>
//                 <Content>
//                     {/* {this.state.selected==1?<ListPosts />:
//                     this.state.selected==2?<CreateNewPost />:<LoginTest />
//                     } */}
//                 </Content>
//             </Layout>
//         );
//     }
// }

// export default Post;

class Post {

    render() {
        const { sampleStr } = "Post";
        return (
            sampleStr
        )
    }
}

export default Post;