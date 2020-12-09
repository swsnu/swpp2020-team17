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
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl: imageUrl,
                    loading: false,
                }),
            );
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.selectedPost !== this.props.selectedPost)
            this.props.history.push('/mypage');
    }

    onFinish(values) {
        values.image = 'temp'
        console.log(values);
        this.props.createPost(values)

    }

    render() {
        const { loading, imageUrl } = this.state;

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
                        <option value="LOL" id='1'>LOL</option>
                        <option value="HearthStone" id='2'>HearthStone</option>
                        <option value="MapleStory" id='3'>MapleStory</option>
                    </select>
                </Form.Item>

                <Form.Item name='image' label='Image' rules={[{ required: false }]}>
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
        );
    }
}

const mapStateToProps = (state) => ({
    postList: state.ps.postList,
    currentUser: state.ur.currentUser,
    selectedPost: state.ps.selectedPost,
})

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) =>
            dispatch(actionCreators.createPost(post)),

        getCurrentUser: () => {
            dispatch(actionCreators.getCurrentUser())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPost)