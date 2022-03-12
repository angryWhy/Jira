import * as React from 'react';
import { useAuth } from '../context/auth-context';



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
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>用户名</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor='password'>密码</label>
                    <input type="password" />
                </div>
                <button type='submit'>注册</button>
            </form>
        </div>
    )
};

export default Register;
