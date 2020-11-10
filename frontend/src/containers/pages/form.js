import React, { useState } from 'react';
import {
    Row, Col, Typography, Input, Form, Button,
    Radio, Switch, Slider, Select, message
} from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router';

const { Title } = Typography;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const FormApp = () => {
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (values) => {
        setLoading(true);
        axios.post(`http://localhost:8000/rooms`,
            values
        )
            .then(res => {
                setLoading(false);
                message.success('Room created Successfully!');
                history.push('/list');
            })
            .catch(error => {
                setLoading(false);
                message.error(error);
            })
    }

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
                    <Form {...layout} onFinish={handleSubmit}>
                        <Form.Item name="title" label="Title"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input room title',
                                }
                            ]}
                        >
                            <Input placeholder="Please Enter your username" />
                        </Form.Item>
                        {/* <Form.Item name="email" label="Email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your correct email',
                                    type: 'email'
                                }
                            ]}
                        >
                            <Input placeholder="Whatever" />
                        </Form.Item> */}
                        <Form.Item name="volume" label="Volume"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select the volume',
                                }
                            ]}
                        >
                            <Radio.Group>
                                <Radio value="two">2</Radio>
                                <Radio value="three">3</Radio>
                                <Radio value="four">4</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item name="tags" label="Tags"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select the game tags',
                                    type: 'array'
                                }
                            ]}
                        >
                            <Select mode="multiple" placeholder="Please select the game tags">
                                <Select.Option value="lol">LOL</Select.Option>
                                <Select.Option value="maple">MapleStory</Select.Option>
                                <Select.Option value="hearth">HearthStone</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="review" label="인원설정을 이렇게할까"
                        >
                            <Slider />
                        </Form.Item>
                        <Form.Item name="public" label="Public" valuePropName="checked"
                        >
                            <Switch />
                        </Form.Item>
                        <div style={{ textAlign: "right" }}>
                            <Button type="primary" loading={loading} htmlType="submit">
                                Save
            </Button>{' '}
                            <Button type="danger" htmlType="button" onClick={() => history.push('/list')}>
                                Back
            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default FormApp;
