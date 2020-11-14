import { Form, Input } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

// const tailLayout = {
//     wrapperCol: { offset: 8, span: 16 },
// };

// const Demo = () => {
//     const onFinish = values => {
//         console.log('Success:', values);
//     };

//     const onFinishFailed = errorInfo => {
//         console.log('Failed:', errorInfo);
//     };
// }

const StepThree = () => {
    return (
        <Form Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>
        </Form>
    );
}

export default StepThree;
// export default () => {