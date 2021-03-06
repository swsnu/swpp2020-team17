import React from "react";
import {connect} from 'react-redux'
import * as actionCreators from '../../store/actions/index';
import "antd/dist/antd.css";
import {Form, Input, message, Button} from 'antd';
// Add image uploading feature
import {Upload} from 'antd';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error("Image is bigger than 2MB!");
    }
    return isJpgOrPng && isLt2M;
};

class CreateNewPost extends React.Component {
    state = {
        loading: false,
        imageUrl: '',
        file: '',
        fileType: '',
        // upload: '',
        preview: '',
    };

    handleChange = info => {
        console.log(info);
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                console.log("getBase64(info.file.ori~): ", imageUrl)
                console.log("info.file.originFileObj: ", info.file.originFileObj)
                this.setState({
                    imageUrl: imageUrl,
                    loading: false,
                    file: info.file.originFileObj,
                    fileType: info.file.type.split('/')[1],
                    // file: imageUrl,
                })
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.selectedPost !== this.props.selectedPost)
            this.props.history.push('/mypage');
    }

    onFinish(values) {
        console.log('[DEBUG] values: ', values);
        console.log('[DEBUG] this.state.file: ', this.state.file);
        console.log('[DEBUG] this.state.fileType: ', this.state.fileType);
        this.props.createPost(values, this.state.file, this.state.fileType)
    }

    render() {
        const { loading, imageUrl} = this.state;

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
            <div className="CreatePost">
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

                <Form.Item name='image' label='Image' rules={[{ required: true }]}>
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        beforeUpload={beforeUpload}
                        onChange={this.handleChange}

                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                </Form.Item>


                <Form.Item name='content' label="Content" rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
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