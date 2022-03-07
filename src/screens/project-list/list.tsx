import * as React from 'react';
import { PList, User } from '../../types/a';

interface IListProps {
    list: PList[],
    user: User[]
}

const List: React.FunctionComponent<IListProps> = ({ list, user }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>名称</th>
                        <th>负责人</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((project) => <tr key={project.id}>
                            <td>
                                {project.name}
                            </td>
                            <td>
                                {user.find(user => user.id === project.personId)?.name || "未知"}
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
};

export default List;
