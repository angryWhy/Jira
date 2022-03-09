import * as React from 'react';
import { paramType, User } from '../../types/a';

interface ISearchPanelProps {
    params:paramType,
    setParams:(params:ISearchPanelProps["params"])=>void
    user:User[]
}

const SearchPanel: React.FunctionComponent<ISearchPanelProps> = ({params,setParams,user}) => {
    return (
        <div>
            <input type="text"
                value={params.name}
                onChange={e => { setParams({ ...params, name: e.target.value }) }} />
            <select value={params.personId}
                onChange={e => { setParams({ ...params, id: e.target.value }) }}>
                <option value="">负责人</option>
                {
                    user.map(item => <option value={item.id} key={item.id}>{item.name}</option>)
                }
            </select>
        </div>
    )
};

export default SearchPanel;
