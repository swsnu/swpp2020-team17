import React from "react";
import {connect} from 'react-redux'
import * as actionCreators from '../../store/actions/index';
import "antd/dist/antd.css";
import {Form, Input, message, Button} from 'antd';
// Add image uploading feature
import {Upload} from 'antd';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';

// function getBase64(img, callback) {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => callback(reader.result));
//     reader.readAsDataURL(img);
// };

// function beforeUpload(file) {
//     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//     if (!isJpgOrPng) {
//         message.error('You can only upload JPG/PNG file!');
//     }
//     // const isJpg = file.type === 'image/jpeg';
//     // if (!isJpg) {
//     //     message.error('You can only upload JPG file!');
//     // }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//         message.error("Image is bigger than 2MB!");
//     }
//     return isJpgOrPng && isLt2M;
// };

class CreateNewPost extends React.Component {
    state = {
        loading: false,
        // imageUrl: '',
        file: '',
        fileType: '',
        upload: '',
        preview: '',
    };

    // handleChange = (info) => {
    //     // const { onChange } = this.props;
    //     // const currFile = fileList[0];
    //     // //FIXME: 테스트 코드
    //     // console.log("File list: ", fileList);
    //     // console.log("Current file: ", currFile);
    //     // console.log("File itself: ", currFile.originFileObj);
    //     if (info.file.status === 'uploading') {
    //         this.setState({ loading: true });
    //         return;
    //     }
    //     if (info.file.status === 'done') {
    //         // Get this url from response in real world.
    //         getBase64(info.file.originFileObj, imageUrl => {
    //             console.log("getBase64(info.file.ori~): ", imageUrl)
    //             console.log("info.file.originFileObj: ", info.file.originFileObj)
    //             this.setState({
    //                 imageUrl: imageUrl,
    //                 loading: false,
    //                 // file: info.file.originFileObj
    //                 file: imageUrl,
    //             })
    //         })
    //     }
    // }
    
    // handleData = file => {
    //     this.setState({
    //         // file: file.originFileObj
    //         file: file
    //     })
    // }

    //TODO: antd 넣을떄 같이
    beforeUpload(file) {
        const isJpg = file.type === 'image/jpeg';
        const isPng = file.type === 'image/png';

        if (isJpg) {
            this.setState({
                fileType: 'jpeg'
            })
            console.log("[DEBUG] filetype is jpeg");
        } else if (isPng) {
            this.setState({
                fileType: 'png'
            })
            console.log("[DEBUG] filetype is png");
        } else {
            message.error('You can only upload JPG/PNG file!');
        }

        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error("Image is bigger than 2MB!");
        }

        return (isJpg || isPng) && isLt2M;
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.selectedPost !== this.props.selectedPost)
            this.props.history.push('/mypage');
    }

    onFinish(values) {
        // values.image = this.state.imageUrl;
        // console.log('File type is:', values);
        console.log('[DEBUG] values: ', values);
        console.log('[DEBUG] this.state.file: ', this.state.file);
        console.log('[DEBUG] this.state.fileType: ', this.state.fileType);
        this.props.createPost(values, this.state.file, this.state.fileType)
    }

    fileChange = e => {
        if(e.target.files){
            this.setState({
                file: e.target.files[0],
                fileType: e.target.files[0].type.split('/')[1],
                upload: true,
                preview: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    render() {
        const { loading, file, fileType, preview} = this.state;

        const layout = {
            labelCol: {span: 5},
            wrapperCol: {span: 12},
        };

        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8}}>Upload</div>
            </div>
        );

        const validateMessages = {
            required: '${label} is required!',
        };

        return (
            <Form
                {...layout}
                name="nest-messages"
                onFinish={this.onFinish.bind(this)}
                validateMessages={validateMessages}>

                <Form.Item name='tag' label="Tag" rules={[{ required: true}]}>
                    <select>
                        <option value="none"/>
                        {this.props.currentUser.tagList.includes(1) ? <option value="LOL" id='1'>LOL</option> : null}
                        {this.props.currentUser.tagList.includes(2) ? <option value="HearthStone" id='2'>HearthStone</option> : null}
                        {this.props.currentUser.tagList.includes(3) ? <option value="MapleStory" id='3'>MapleStory</option> : null}
                    </select>
                </Form.Item>

                {/* <Form.Item name='image' label='Image' rules={[{ required: true }]}> */}
                    {/* <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        // action="https://shallwe-bucket.s3.amazonaws.com/"
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        beforeUpload={beforeUpload}
                        onChange={this.handleChange}
                        // onChange={handleChange}
                        // data={this.handleData}
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload> */}
                {/* </Form.Item> */}

                {/* Preview 만들어야해! */}
                <input type="file" id="file" onChange={this.fileChange}/>

                <Form.Item name='content' label="Content" rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const mapStateToProps = (state) => ({
    postList: state.ps.postList,
    currentUser: state.ur.currentUser,
    selectedPost: state.ps.selectedPost,
    tagList: state.tg.tagList,
})

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post, file, fileType) =>
            dispatch(actionCreators.createPost(post, file, fileType)),
        getCurrentUser: () => {
            dispatch(actionCreators.getCurrentUser())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPost)