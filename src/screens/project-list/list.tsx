import * as React from 'react';
import { PList, User } from '../../types/a';
import {Table} from "antd"
interface IListProps {
    list: PList[],
    user: User[]
}

const List: React.FunctionComponent<IListProps> = ({ list, user }) => {
    return(
        <Table pagination={false} columns={[{title:"名称",dataIndex:"id",sorter:(a,b)=>a.name.localeCompare(b.name)},{
            title:"负责人",
            render(value,project){
                return(
                    <span>
                    {user.find(user => user.id === project.personId)?.name || "未知"}
                    </span>
                )
            }
        }]} dataSource={list} />
    )
    // return (
    //     <div>
    //         <table>
    //             <thead>
    //                 <tr>
    //                     <th>名称</th>
    //                     <th>负责人</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {
    //                     list.map((project) => <tr key={project.id}>
    //                         <td>
    //                             {project.name}
    //                         </td>
    //                         <td>
    //                             {user.find(user => user.id === project.personId)?.name || "未知"}
    //                         </td>
    //                     </tr>)
    //                 }
    //             </tbody>
    //         </table>
    //     </div>
    // )
};

export default List;
