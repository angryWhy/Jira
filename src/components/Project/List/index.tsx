import * as React from 'react';
import { Project, User } from '../../../types/projectType';

interface IListProps {
  list:Project[],
  users:User[]
}

const List: React.FunctionComponent<IListProps> = (props) => {
  const {list,users} = props
  console.log(list);
  
  return(
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
                list.map((item:Project,idnex: number)=>{
                  return<tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{users.find((user:any)=>user.id=== item.personId)?.name || "未知"}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
      </div>
  )
};

export default List;
