import React, { Component } from 'react';
import { connect } from 'react-redux';
//FIXME: Infinite scroll to be implemented
// import InfiniteScroll from 'react-infinite-scroller';
import { List, Divider, Spin, Space, Button } from 'antd';
//FIXME: Infinite scroll to be implemented
// import { message } from 'antd';
import { MessageTwoTone, HeartTwoTone } from '@ant-design/icons';
import * as actionCreators from '../../store/actions/index';
import styled, { keyframes } from 'styled-components';
import Author from '../../components/Author/Author'

/* Components */
import GameTag from '../../components/GameTag/GameTag'
// import CommentList from './CommentList';

const PostPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* overflow: auto; */
  /* padding: 8px 24px; */
    height: 100%;
`;

const GameTagWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const LoadingWrapper = styled.div`
    position: absolute;
    bottom: 40px;
    width: 100%;
    text-align: center;
`;

class Post extends Component {

    state = {
        selectedTagList: [],
        activePostList: [], // under selected tag
        //FIXME: Infinite scroll to be implemented
        // loading: false,
        // hasMore: true,
    }

    componentDidMount() {
        this.props.onGetCurrentUser();
        this.props.onGetPostList();
        this.props.onGetTagList();
        if (this.props.storedCurrentUser) {
            this.setState({
                selectedTagList: this.props.storedCurrentUser.tagList,
                activePostList: this.props.storedPostList
            });
            // }
            // this.fetchData(res => {
            //     this.setState({
            //         postList: res.results,
            //     });
            // });
        }
    }

    onToggleTag = (tag_id) => {
        const checked = this.state.selectedTagList.indexOf(tag_id) > -1;
        const { selectedTagList } = this.state;
        const nextSelectedTags = checked ?
            (selectedTagList.filter(id => id !== tag_id)) :
            ([...selectedTagList, tag_id]);
        console.log('You are interested in: ', nextSelectedTags);
        this.setState({ selectedTagList: nextSelectedTags });
    }

    //FIXME: Infinite scroll to be implemented
    // handleInfiniteOnLoad = () => {
    //     let { activePostList } = this.state;
    //     this.setState({
    //         loading: true,
    //     });

    //     if (activePostList.length > 3) { // 길이 관련 손봐야함.
    //         message.warning('모든 포스트를 다 읽었습니다.');
    //         this.setState({
    //             hasMore: false,
    //             loading: false,
    //         });
    //         return;
    //     }

    //FIXME: Infinite scroll to be implemented
    //     this.fetchData(posts => {
    //         activePostList = activePostList.concat(posts);
    //         this.setState({
    //             activePostList,
    //             loading: false,
    //         });
    //     });
    // };

    //FIXME: Infinite scroll to be implemented
    // fetchData = callback => {
    //     reqwest({
    //         url: 'http://localhost:3000/api/post',
    //         type: 'json',
    //         method: 'get',
    //         contentType: 'application/json',
    //         success: res => {
    //             // console.log(res)
    //             callback(res);
    //         },
    //     });
    // };

    render() {
        let tagList = []
        let tagToggle = []
        let postList = []
        let activePostList = []
        let user = null
        
        if (this.props.storedCurrentUser && this.props.storedPostList && this.props.storedTagList) {
            user = this.props.storedCurrentUser;
            tagList = this.props.storedTagList;
            tagToggle = this.props.storedCurrentUser.tagList.map(tag_id => {
                return (
                    <GameTag 
                        id={tag_id} 
                        isChecked={this.state.selectedTagList.includes(tag_id)}
                        onClick={() => this.onToggleTag(tag_id)}
                    />
                );
            });
            postList = this.props.storedPostList;
            activePostList = this.props.storedPostList.filter(post => {
                return this.state.selectedTagList.includes(post.tag);
            });
        }

        return (
            <PostPageWrapper>
                <Divider orientation="left" style={{ marginTop: 0 }} plain> Your games </Divider>
                <div className="tagToggle">
                    <GameTagWrapper>
                        {tagToggle}
                    </GameTagWrapper> 
                </div>

                <Divider orientation="left" plain> Posts </Divider>
                {/*
                //FIXME: Infinite scroll to be implemented
                <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={this.handleInfiniteOnLoad}
                    hasMore={!this.state.loading && this.state.hasMore}
                    useWindow={false}
                >
                */}
                    <List
                        dataSource={activePostList}
                        renderItem={item => (
                            <List.Item key={item.id}>
                                <PostContainer>
                                    <PostHeaderContainer>
                                        <AuthorItem onClick={handleAuthorClicked} style={{ cursor: "pointer" }} >
                                            <Author
                                                //FIXME: user로 넘기도록 수정해야함
                                                name={item.authorName}
                                                avatar={item.authorAvatar}
                                                showOnline={true}
                                            />
                                        </AuthorItem>
                                        <ButtonItem>
                                            <Button
                                                type="primary"
                                                shape="round"
                                                onClick={handleShallWeClicked}
                                                // disabled="true"
                                                style={{ fontSize: 12, fontWeight: "bolder" }}
                                            >
                                                Shall We ?
                                            </Button>
                                        </ButtonItem>
                                        <GameTagItem>
                                            <GameTag
                                                id={item.tag}
                                                // FIXME: 왜 default가 false지
                                                isChecked={this.state.selectedTagList.includes(item.tag)}
                                            />
                                        </GameTagItem>
                                    </PostHeaderContainer>

                                    <Divider style={{ marginTop: 0, marginBottom: 10}}/>

                                    <PostBodyContainer onClick={handleBodyClicked}>
                                        <ContentsContainer style={{ width: "100%" }}>
                                                {item.content}
                                        </ContentsContainer>
                                        <ImageContainer>
                                            <img src={item.image} style={{ width: "100%" }} />
                                        </ImageContainer>
                                    </PostBodyContainer>

                                    <Divider style={{ marginTop: 0, marginBottom: 10}}/>

                                    <PostFooterContainer>
                                        <IconContainer>
                                            <div>
                                                <Space>
                                                    <HeartTwoTone
                                                        onClick={handleLikeCliked}
                                                    />
                                                    156
                                                </Space>
                                            </div>
                                            <Divider
                                                type="vertical"
                                                style={{ alignSelf: "center", marginLeft: "10px", marginRight: "10px" }}
                                            />
                                            <div>
                                                <Space>
                                                    <MessageTwoTone
                                                        onClick={handleCommentClicked}
                                                    />
                                                    3
                                                </Space>
                                            </div>
                                        </IconContainer>
                                        {/*
                                        //FIXME: Infinite scroll to be implemented
                                        show comment
                                        */}
                                    </PostFooterContainer>
                                </PostContainer>
                            </List.Item>
                        )}
                    >
                        {/* {this.state.loading && this.state.hasMore && (
                            <LoadingWrapper>
                                <Spin />
                            </LoadingWrapper>
                        )} */}
                    </List>
                {/* </InfiniteScroll> */}
            </PostPageWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        storedCurrentUser: state.ur.currentUser,
        storedTagList: state.tg.tagList,
        storedPostList: state.ps.postList,
        storedCommentList: state.ps.commentList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCurrentUser: () => 
            dispatch(actionCreators.getCurrentUser()),
        onPutUser: (user) => 
            dispatch(actionCreators.putUser(user)),
        onGetPostList: () => 
            dispatch(actionCreators.getPostList()),
        onGetTagList: () => 
            dispatch(actionCreators.getTagList()),
        // onGetCommentList: () =>
        //     dispatch(actionCreators.getCommentList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);



// FIXME: author, shallwe, gameTag 들이 한 줄에 위치하도록 minwidth 설정 필요
const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    width: 100%;
    box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.2);
    padding: 10px;
    border-radius: 15px;
    /* flex-wrap: wrap; */
    /* justify-content: space-between; */
    /* border: 1px solid #005691; */
`;

const PostHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

const AuthorItem = styled.div`
    flex: none; // flex-grow/shrink/basis : 0/0/auto
`;

const ButtonItem = styled.div`
    flex: none;
    ${(props) => props.active && `
    animation: ${buttonShake} .8s ;
    `}
`;

// FIXME: 애니메이션 작동 안됨.
const buttonShake = keyframes`
    0%{
        transform: translate(0);
    }
    20%,
    40%,
    60%,
    80%{
        transform: translate(.8em);
        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.5);
    }
    10%,
    30%,
    50%{
        transform: translate(-.2em);
    }
    70%,
    100%{
        transform: translate(0);
    }
`;

const GameTagItem = styled.div`
    margin-left: auto;
    margin-right: 0px;
`;

const PostBodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    align-items: center;
    flex-shrink: 1;
    /* flex-wrap: wrap; */
    cursor: pointer;
`;
const ContentsContainer = styled.div`
    /* flex-grow:2; */
    flex-wrap: wrap;
    word-wrap: true;
    flex-basis: 70%;
    word-break: break-all;
    word-wrap: normal;
    /* word-wrap: "true"; */
    /* display: inline-flex; */
    /* flex-basis: 70%; */
`;
const ImageContainer = styled.div`
    /* flex-grow:1; */
    flex-basis:30%;
    min-height: 1px;
    margin-left: 20px;
    /* flex: auto; */
    /* width: 30%; */
`;
const PostFooterContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 5px;
`;

const handleAuthorClicked = () => {
    console.log("Author click!");
}

const handleShallWeClicked = () => {
    console.log("ShallWe click!");
}

const handleBodyClicked = () => {
    console.log("Body click!");
}

//FIXME: backend에서 코멘트 수정된 뒤 추가.
// const showCommentList = () => {
//     if (showComment) {
//         return (
//             <CommentList />
//         )
//     } else {
//         return ({});
//     }
// }

const handleLikeCliked = () => {
    console.log("Like!");
}

const handleCommentClicked = () => {
    console.log("Comment!");
}

// import Author_test_copy from './Author_test_copy';

// const dummyDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
// const dummyDataUrl = './dummyData.html';

// class Post extends React.Component {
//     state = {
//         data: [],
//         loading: false,
//         hasMore: true,
//     };

//     componentDidMount() {
//         this.fetchData(res => {
//             this.setState({
//                 data: res,
//             });
//             console.log(this.state.data);
//         });
//     }

//     fetchData = callback => {
//         reqwest({
//             // url: dummyDataUrl,
//             // url: http://localhost:3000/api
//             url: 'http://localhost:3000/api/post',
//             type: 'json',
//             method: 'get',
//             contentType: 'application/json',
//             success: res => {
//                 // console.log(res)
//                 callback(res);
//             },
//         });
//     };

//     handleInfiniteOnLoad = () => {
//         let { data } = this.state;
//         this.setState({
//             loading: true,
//         });
//         if (data.length > 3) {
//             message.warning('모든 포스트를 다 읽었습니다.');
//             this.setState({
//                 hasMore: false,
//                 loading: false,
//             });
//             return;
//         }
//         this.fetchData(res => {
//             data = data.concat(res.results);
//             this.setState({
//                 data,
//                 loading: false,
//             });
//         });
//     };

//     render() {
//         return (
//             <DemoInfiniteContainer>
//                 <InfiniteScroll
//                     initialLoad={false}
//                     pageStart={0}
//                     loadMore={this.handleInfiniteOnLoad}
//                     hasMore={!this.state.loading && this.state.hasMore}
//                     useWindow={true}
//                     height="100%"
//                 >
//                     <List
//                         dataSource={this.state.data}
//                         renderItem={item => (
//                             <List.Item key={item.id}>
//                                 <PostContainer>
//                                     <PostHeaderContainer>
//                                         <AuthorItem onClick={handleAuthorClicked} style={{ cursor: "pointer" }} >
//                                             <Author_test_copy data={item}/>
//                                         </AuthorItem>
//                                         <ButtonItem>
//                                             <Button
//                                                 type="primary"
//                                                 shape="round"
//                                                 onClick={handleShallWeClicked}
//                                                 // disabled="true"
//                                                 style={{ fontSize: 12, fontWeight: "bolder" }}
//                                             >
//                                                 Shall We ?
//                                             </Button>
//                                         </ButtonItem>
//                                         <GameTagItem>
//                                             <GameTag name="maple" />
//                                         </GameTagItem>
//                                     </PostHeaderContainer>

//                                     <Divider style={{ marginTop: 0, marginBottom: 10}}/>

//                                     <PostBodyContainer onClick={handleBodyClicked}>
//                                         <ContentsContainer style={{ width: "100%" }}>
//                                                 {item.content}
//                                         </ContentsContainer>
//                                         <ImageContainer>
//                                             <img src={item.image} style={{ width: "100%" }} />
//                                         </ImageContainer>
//                                     </PostBodyContainer>

//                                     <Divider style={{ marginTop: 0, marginBottom: 10}}/>

//                                     <PostFooterContainer>
//                                         <IconContainer>
//                                             <div>
//                                                 <Space>
//                                                     <HeartTwoTone
//                                                         onClick={handleLikeCliked}
//                                                     />
//                                                     156
//                                                 </Space>
//                                             </div>
//                                             <Divider
//                                                 type="vertical"
//                                                 style={{ alignSelf: "center", marginLeft: "10px", marginRight: "10px" }}
//                                             />
//                                             <div>
//                                                 <Space>
//                                                     <MessageTwoTone
//                                                         onClick={handleMessageCliked}
//                                                     />
//                                                     3
//                                                 </Space>
//                                             </div>
//                                         </IconContainer>
//                                         {/* {showCommentList} */}
//                                     </PostFooterContainer>
//                                 </PostContainer>
//                             </List.Item>
//                         )}
//                     >
//                         {this.state.loading && this.state.hasMore && (
//                             <DemoLoadingContainer>
//                                 <Spin />
//                             </DemoLoadingContainer>
//                         )}
//                     </List>
//                 </InfiniteScroll>
//             </DemoInfiniteContainer>
//         );
//     }
// }

/*
                    <List
                        dataSource={this.state.data}
                        renderItem={item => (
                            <List.Item key={item.id}>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    }
                                    title={<a href="https://ant.design">{item.name.last}</a>}
                                    description={item.email}
                                />
                                <div>Content</div> 
                            </List.Item>
                        )}
                    >
                        {this.state.loading && this.state.hasMore && (
                            <DemoLoadingContainer>
                                <Spin />
                            </DemoLoadingContainer>
                        )}
                    </List>
*/
/*
    import from PostPage_simple
*/
// const postList = [];
// for (let i = 0; i < 23; i++) {
//     postList.push({
//         href: 'https://ant.design',
//         title: `ant design part ${i}`,
//         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//         description:
//             'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//         content:
//             'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//     });
// }

// const commentList = [];
// for (let i = 0; i < 5; i++) {
//     commentList.push({
//         author: `moovinzoo ${i}`,
//         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//         content:
//             `content ${i}`,
//     });
// }