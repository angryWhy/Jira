import * as React from 'react';
import { useAuth } from '../context/auth-context';
import { Button, Form, Input } from 'antd';



interface ILoginProps {
    onerror? :(error:Error) =>void
}
const Register: React.FunctionComponent<ILoginProps> = ({onerror}) => {
    const { register, user } = useAuth()
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
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        register({
            username, password,
            id: 0,
            name: '',
            token: ''
        })
        
    }
    return (
        <div>
            <Form onFinish={handleSubmit}>
                <Form.Item>
                    
                    <Input type="text" />
                </Form.Item>
                <Form.Item name="password">
                    
                    <Input type="password" />
                </Form.Item>
                <Button htmlType='submit' type='primary' >注册</Button>
            </Form>
        </div>
    )
};

export default Register;
