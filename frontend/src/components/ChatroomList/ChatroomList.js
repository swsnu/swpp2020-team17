import React from 'react'; 
import { Table, Row, Col, Button, Typography } from 'antd';

const ChatroomList = (props) => {
    const shallWeColumns = [
        {
            title: 'Game',  
            dataIndex: 'game',
        },
        {
            title: 'Gamers',
            dataIndex: 'gamers'
        },
        {
            title: 'Title',
            dataIndex: 'title'
        },
        {
            title: 'Sorry',
            dataIndex: 'sorry'
        },
        {
            title: 'Sure',
            dataIndex: 'sure'
        },
    ];
    const chatroomColumns = [
        {
            title: 'Game',
            dataIndex: 'game',
        },
        {
            title: 'Gamers',
            dataIndex: 'gamers'
        },
        {
            title: 'Title',
            dataIndex: 'title'
        },
        {
            title: '------',
            dataIndex: 'empty'
        },
        {
            title: 'Join',
            dataIndex: 'join'
        },
    ];


    const data = [{
    }];

    if (props.isShallWe) {
        props.list.map(room => {
            data.push({
                game: props.tagList.find(tag => tag.id == room.tag).name,
                gamers: room.memberList.length,
                title: room.title,
                sorry: <Button type="primary" key="1" onClick={props.onClickSorry(room.id)}> Sorry </Button>,
                sure: <Button type="primary" key="2" onClick={props.onClickSure(room.id)}> Sure </Button>,
            })
            return data;
        });
        return (
            <div className="ChatroomList">     
                <Row gutter={[40, 0]}>
                    <Col span={24}>
                        <Table columns={shallWeColumns} dataSource={data} />
                    </Col>
                </Row>
            </div>
        );
    } else {
        props.list.map(room => {
            data.push({
                game: props.tagList.find(tag => tag.id == room.tag).name,
                gamers: room.memberList.length,
                title: room.title,
                empty: null,
                join: <Button type="primary" onClick={props.onClickJoin(room.id)}> Join </Button>,
            })
            return data;
        });
        return (
            <div className="ChatroomList">     
                <Row gutter={[40, 0]}>
                    <Col span={24}>
                        <Table columns={chatroomColumns} dataSource={data} />
                    </Col>
                </Row>
            </div>
        );
    }
    
}

export default ChatroomList;