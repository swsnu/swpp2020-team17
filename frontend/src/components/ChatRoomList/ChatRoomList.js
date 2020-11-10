import { Table, Row, Col, Button, Typography } from 'antd';

const { Title } = Typography;

const ChatRoomList = props => {
    const columns = [
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
            title: 'Join',
            dataIndex: 'join'
        },
    ];

    const data = [{
    }];

    props.chatlist.map((chatroom) => {
        data.push({
            game: chatroom.tag,
            gamers: chatroom.members.length,
            title: chatroom.title,
            join: 'Join',
        })
        return data;
    });

    return (
        <div>
            <Row gutter={[40, 0]}>
                <Col span={18}>
                    <Title level={2}>
                        Room List
            </Title>
                </Col>
                <Col span={6}>
                    <Button onClick={props.clickRoomInfo} block>Create Room</Button>
                </Col>
            </Row>
            <Row gutter={[40, 0]}>
                <Col span={24}>
                    <Table columns={columns} dataSource={data} />
                </Col>
            </Row>
        </div>
    );
}

export default ChatRoomList;