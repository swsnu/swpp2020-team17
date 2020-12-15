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

    constructor(props){
        super(props);
        this.props.onGetCurrentUser();
    }

    async handleSubmit(value) {
        let newChatroom = {
            isGlobal: (value.isGlobal==undefined)? false : true,
            title: value.title,
            tag: value.tag,
            maxPersonnel: value.maxPersonnel,
        }
        console.log(newChatroom);
        let user = this.props.storedCurrentUser;
        await this.props.onCreateChatroom(this.props.storedCurrentUser, newChatroom);
        // await this.props.onCreateChatroom(user, newChatroom);
        if(user.chatroom != -1) {
            this.props.history.push('/chatroom/' + user.chatroom);
        }
    }

    render() {
        // const [loading, setLoading] = useState(false);
        // const history = useHistory();
        // let user = this.props.storedCurrentUser;
        let option = this.props.storedCurrentUser.tagList.map(id => {
            return (<Select.Option value={id}>{id===1 ? "LOL" : id===2 ? "HearthStone" : "MapleStory"}</Select.Option>)
        });
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
                        <Form id="submit-form" {...layout} onFinish={(value) => this.handleSubmit(value)}>
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
                                    {option}
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
                                <Slider min={2} max={100} />
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
        onCreateChatroom: (user, room) => dispatch(actionCreators.createChatroom(user, room)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RoomInfo);