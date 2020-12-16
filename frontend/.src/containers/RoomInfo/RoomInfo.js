import React, { useState, Component } from 'react';
import {
    Row, Col, Typography, Input, Form, Button,
    Radio, Switch, Slider, Select, message
} from 'antd';
import { useHistory } from 'react-router';
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions/index';

const { Title } = Typography;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

class RoomInfo extends Component {

    componentDidMount() {
        this.props.onGetCurrentUser();
    }

    handleSubmit = (value) => {
        let newChatroom = {
            isGlobal: (value.isGlobal==undefined)? false : true,
            title: value.title,
            tag: value.tag,
            maxPersonnel: value.maxPersonnel,
        }
        console.log(newChatroom);
        this.props.onCreateChatroom(newChatroom);
        
        // history.push

        // setLoading(true);
        // axios.post(`http://localhost:8000/rooms`,
        //     values
        // )
        //     .then(res => {
        //         setLoading(false);
        //         message.success('Room created Successfully!');
        //         /** history.push('/chatroom/:id') 이런식으로 바꿔줘야함 */
        //         history.push('/lobby');
        //     })
        //     .catch(error => {
        //         setLoading(false);
        //         message.error(error);
        //     })
    }

    render() {
        // const [loading, setLoading] = useState(false);
        // const history = useHistory();
        return (
            <div>
                <Row gutter={[40, 0]}>
                    <Col span={23}>
                        <Title style={{ textAlign: 'center' }} level={2}>
                            Create New Room
                </Title>
                    </Col>
                </Row>
                <Row gutter={[40, 0]}>
                    <Col span={18}>
                        <Form id="submit-form" {...layout} onFinish={this.handleSubmit}>
                            <Form.Item id="title-input" name="title" label="Title"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input room title',
                                    }
                                ]}
                            >
                                <Input placeholder="Enter Title" />
                            </Form.Item>
                            <Form.Item id="tag-input" name="tag" label="Tags"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select the game tags',
                                    }
                                ]}
                            >
                                <Select placeholder="Select Game Tag">
                                    <Select.Option value="1">LOL</Select.Option>
                                    <Select.Option value="2">HearthStone</Select.Option>
                                    <Select.Option value="3">MapleStory</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item id="maxPersonnel-input" name="maxPersonnel" label="Max Personnel"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select the max personnel',
                                    }
                                ]}
                            >
                                <Slider />
                            </Form.Item>
                            <Form.Item id="isGlobal-input" name="isGlobal" label="Public" valuePropName="checked"
                            >
                                <Switch />
                            </Form.Item>
                            <div style={{ textAlign: "right" }}>
                                <Button id="save-button" type="primary" htmlType="submit">
                                    Save
                </Button>{' '}
                                <Button id="back-button" type="danger" htmlType="button" onClick={() => this.props.history.push('/lobby')}>
                                    Back
                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
    
}


const mapStateToProps = (state) => {
    return {
        storedCurrentUser: state.ur.currentUser,
        storedSelectedChatroom: state.chat.selectedChatroom,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCurrentUser: () => dispatch(actionCreators.getCurrentUser()),
        onCreateChatroom: (room) => dispatch(actionCreators.createChatroom(room)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RoomInfo);