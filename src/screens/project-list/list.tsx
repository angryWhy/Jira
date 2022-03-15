import * as React from 'react';
import { PList, User } from '../../types/a';
import { Table, TableProps } from "antd"
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
interface IListProps {
    list: PList[],
    user: User[],

}
interface ListProps extends TableProps<PList> {
    user: User[],
    list: PList[],

}
const List: React.FunctionComponent<ListProps> = ({ user, ...props }: ListProps) => {
    return (
        <Table<PList> pagination={false} columns={[
            {
                title: "名称", dataIndex: "id", sorter: (a, b) => a.name.localeCompare(b.name),
                render(value,project){
                    return<Link to ={String(project.id)}>{project.name}</Link>
                }
            },
            {
                title: "负责人",
                render(value, project) {
                    return (
                        <span>
                            {user.find(user => user.id === project.personId)?.name || "未知"}
                        </span>
                    )
                }
            },
            {
                title: "创建时间", render(value, project) {
                    return <span>
                        {
                            project.created ? dayjs(project.created).format("YYYY--MM--DD") : "无"
                        }
                    </span>
                }
            },
            { title: "部门", dataIndex: "organization" },

        ]} {...props} />
    )
};

export default List;
