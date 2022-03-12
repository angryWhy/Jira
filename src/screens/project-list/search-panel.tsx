import { Form, Input, Select } from 'antd';
import * as React from 'react';
import { paramType, User } from '../../types/a';

interface ISearchPanelProps {
    params:paramType,
    setParams:(params:ISearchPanelProps["params"])=>void
    user:User[]
}

const SearchPanel: React.FunctionComponent<ISearchPanelProps> = ({params,setParams,user}) => {
    return (
        <Form 
             labelCol={{ span: 8 }}
             wrapperCol={{ span: 8 }}>
            <Form.Item>
            <Input type="text"
                   value={params.name}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setParams({ ...params, name: e.target.value }) }} />
            </Form.Item>
            <Form.Item>
            <Select value={params.personId}
                    onChange={value => { setParams({ ...params, id:value }) }}>
                <option value="">负责人</option>
                {
                    user.map(item => <option value={item.id} key={item.id}>{item.name}</option>)
                }
            </Select>
            </Form.Item>
        </Form>
    )
};

export default SearchPanel;
