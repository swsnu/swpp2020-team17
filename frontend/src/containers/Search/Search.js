// import React, { Component } from 'react';
// import MenuBar from '../../components/MenuBar/MenuBar';
// import SearchedTag from '../../components/SearchedTag/SearchedTag';
// import SearchedUser from '../../components/SearchedUser/SearchedUser';
// import SearchBar from '../../components/SearchBar/SearchBar';


// class Search extends Component {
    
//     componentDidMount() {
//         this.props.onGetUserList();
//         this.props.onGetTagList();
//         this.props.onGetUserInfo();
//     }
//     onSearch = value => console.log(value);

//     state = {
//         searchInput: '',
//     }

//     render() {
        
//         users = this.props.storedUserList.map(user => {
//             if (user.username.includes(searchInput)) {
//                 addOrDelete = 'add';
//                 if (user.friendList.find(id=this.props.storedCurrentUser.id) != null) addOrDelete = 'delete'
//                 return <SearcehdUser username={user.username} addOrDelete={addOrDelete}/>
//             }

//         })

//         return (
//             <div>
//                 <MenuBar></MenuBar>
//                 <SearchBar
//                     onSearch={this.onSearch}
//                 />
//                 <SearchedTag></SearchedTag>
//                 <SearchedUser></SearchedUser>
//             </div>
//         );
//     }
// }

// const mapStateToProps = state => {
//     return {
//         storedUserList: state.ur.userList,
//         storedCurrentUser: state.ur.currentUser,
//     };
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onGetUserList: () =>
//             dispatch(actionCreators.getUserList()),
//         onGetUserInfo: () =>
//             dispatch(actionCreators.getUserInfo()),
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));