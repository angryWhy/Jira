import * as React from 'react';
import { useAuth } from '../context/auth-context';
import { Button, Form, Input } from "antd"
interface ILoginProps {
}
const Login: React.FunctionComponent<ILoginProps> = (props) => {
    const { login, user } = useAuth()
    function lg(param: { userName: string, password: string }) {
        fetch(`http://localhost:3004/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(param)
        }).then(
            async (response: Response) => {
                if (response.ok) {

                }
            }
        )
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const userName = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        lg({ userName, password })
    }
    return (
        <div>
            <Form onFinish={handleSubmit}>
                <Form.Item name="username " rules={[{ required: true, message: "请输入用名字" }]}>
                    <Input type="text" placeholder='用户名' />
                </Form.Item>
                <Form.Item name="password " rules={[{ required: true, message: "请输入密码" }]}>
                    <Input type="password" placeholder='用户名' />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit' >登录</Button>
                </Form.Item>
            </Form>
        </div>
    )
};

export default Login;
