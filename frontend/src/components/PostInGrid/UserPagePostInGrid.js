import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../../store/actions/index';
import Gallery from "react-photo-gallery";
import { Row, Col, Image } from 'antd';

class GridPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            myPostList: [],
            height: 0,
            myGrids: [],
            selectedTagList: [],
        }
    }
    componentDidMount() {
        this.props.onGetPostList();
    }

    render() {
        let { myPostList, myGrids, selectedTagList } = this.state; 
        selectedTagList = this.props.selectedTagList;
        myPostList = this.props.storedPostList.filter(post => 
            (post.author == this.props.match.params.id) && selectedTagList.includes(post.tag));
        myGrids = [];
        if (myPostList.length != myGrids.length) {
            for (let i = 0; i < myPostList.length; i++) {
                myGrids.push({
                    key: i.toString(),
                    src: myPostList[i].image,
                    width: 4,
                    height: 3
                })
            }
        }
        console.log("gridPost");
        console.log(selectedTagList);
        console.log(myPostList);
        return (
            <div className="UserPagePostInGrid">
                {myGrids.length != 0 ? <Gallery photos={myGrids} direction={"column"}
                onClick={(e, { index }) => this.props.history.push('/post/' + myPostList[index].id)} /> : ''}
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        storedPostList: state.ps.postList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetPostList: () =>
            dispatch(actionCreators.getPostList()),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GridPost))