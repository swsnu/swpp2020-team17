import React from 'react';
import { Steps, Button, message, Form, Input} from 'antd';
import './style.css';
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

const { Step } = Steps;

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const titles = [
    {
        title: 'First',
    },
    {
        title: 'Second',
    },
    {
        title: 'Last',
    },
];

const steps = [
    { name: 'StepOne', component: <StepOne /> },
    { name: 'StepTwo', component: <StepTwo /> },
    { name: 'StepThree', component: <StepThree /> },
]

const LoginStepper = () => {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <>
            <Steps current={current}>
                {titles.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].component}</div>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </>
    );
};

export default LoginStepper;