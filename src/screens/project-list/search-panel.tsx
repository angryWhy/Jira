import { Form, Input, Select } from 'antd';
import { jsx } from '@emotion/react';
import * as React from 'react';
import { paramType, User } from '../../types/a';
import styled from '@emotion/styled';

interface ISearchPanelProps {
    params:paramType,
    setParams:(params:ISearchPanelProps["params"])=>void
    user:User[]
}
const {Option} = Select
const SearchPanel: React.FunctionComponent<ISearchPanelProps> = ({params,setParams,user}) => {
    return (
        <Form 
             labelCol={{ span: 8 }}
             wrapperCol={{ span: 16 }}
             layout="inline"
             
             >
            <Form.Item>
            <Input type="text"
                   value={params.name}
                   placeholder="项目名称"
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setParams({ ...params, name: e.target.value }) }} />
            </Form.Item>
            <Form.Item>
            <Select value={params.personId}
                    onChange={value => { setParams({ ...params, id:value }) }} 
                    
                    >
                <Option value="">负责人</Option>
                {
                    user.map(item => <Option value={item.id} key={item.id}>{item.name}</Option>)
                }
            </Select>
            </Form.Item>
        </Form>
    )
};

export default SearchPanel;
