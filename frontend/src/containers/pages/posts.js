import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Button, Typography } from 'antd';
import { useHistory } from 'react-router';
import axios from 'axios';

const { Title } = Typography;


const Posts = () => {
    const history = useHistory();
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/posts`).then(res => {
            setAllData(res.data);
        });
    });

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Author',
            dataIndex: 'author'
        },
        {
            title: 'Tags',
            dataIndex: 'tags'
        },
        {
            title: 'Volume',
            dataIndex: 'volume'
        },
    ];

    const data = [{
    }];

    allData.map((user) => {
        data.push({
            key: user.id,
            username: user.username,
            email: user.email,
            gender: user.gender,
            review: user.review + '%',
        })
        return data;
    });

    const handleClick = () => {
        history.push('/form')
    }

    return (
        <div>
            <Title level={2}> Post List </Title>
            {/* <Row gutter={[40, 0]}>
                <Col span={18}>
                    <Title level={2}>
                        Room List
                    </Title>
                </Col>
                <Col span={6}>
                    <Button onClick={handleClick} block>Create Room</Button>
                </Col>
            </Row>
            <Row gutter={[40, 0]}>
                <Col span={24}>
                    <Table columns={columns} dataSource={data} />
                </Col>
            </Row> */}
        </div>
    );
}

export default Posts;