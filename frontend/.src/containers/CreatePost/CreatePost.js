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
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };

    onFinish(values) {
        console.log(values);
        this.props.createPost(values)
        this.props.history.push('/post')
    }

    info() {
        message.info('Post Created');
    };

    render() {
        const { loading, imageUrl } = this.state;
        const postList = this.props.postList

        console.log(postList)

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
            types: {
                email: '${label} is not validate email!',
                number: '${label} is not a validate number!',
            },
            number: {
                range: '${label} must be between ${min} and ${max}',
            },
        };

        return (
            <Form
                {...layout}
                name="nest-messages"
                onFinish={this.onFinish.bind(this)}
                validateMessages={validateMessages}>

                <Form.Item name='title' label="Title" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>

                <Form.Item name='image' label='Image' rules={[{required: false}]}>
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        beforeUpload={beforeUpload}
                        onChange={this.handleChange}
                    >
                        {imageUrl? <img src={imageUrl} alt="avatar" style={{ width:'100%'}} /> : uploadButton}
                    </Upload>
                </Form.Item>

                <Form.Item name='content' label="Content" rules={[{required: true}]}>
                    <Input.TextArea/>
                </Form.Item>

                <Form.Item wrapperCol={{...layout.wrapperCol}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const mapStateToProps = (state) => ({
    postList: state.ps.postList
})

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) =>
            dispatch(actionCreators.createPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPost)