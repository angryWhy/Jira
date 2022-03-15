import qs from 'qs';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { PList, User, paramType } from '../../types/a';
import { cleanObejct, useDebounce } from '../../utils/cleanObject';
import List from './list';
import SearchPanel from './search-panel';
import { useAsync } from '../../utils/useAsync';
import { useHttp } from '../../utils/http';
import styled from '@emotion/styled';
import { useDocumentTitle } from '../../utils/useDocument';
import { useUrlQueryParam } from '../../utils/url';
interface IProjectListProps {
}
// const apiUrl = process.env.REACT_APP_API_URL
const ProjectList: React.FunctionComponent<IProjectListProps> = (props) => {
    const [params, setParams] = useState<paramType>({
        name: "",
        personId: ""
    })
    const [keys] = useState<("name"|"personId")[]>(["name","personId"])
    const [param] = useUrlQueryParam(keys)
    const [user, setUser] = useState<User[]>([])
    const [list, setList] = useState<PList[]>([])
    const [loading, setLoading] = useState(true)
    const debounce = useDebounce(params,1000)
    const cilent = useHttp()
    const {run,isLoading,error,data} = useAsync<PList[]>()
    useDocumentTitle("项目列表",false)
    useEffect(() => {
        fetch(`http://localhost:3004/projects?${qs.stringify(cleanObejct(params))}`).then(
            async response => {
                if (response.ok) {
                    setList(await response.json())
                }
            }
        ).finally(()=>setLoading(false))
    }, [debounce,params])
    useEffect(() => {
        fetch(`http://localhost:3004/users`).then(
            async response => {
                if (response.ok) {
                    setUser(await response.json())
                }
            }
        )
    }, [params])
    return (
        <Container>
            <SearchPanel params={params} setParams={setParams} user={user} />
            <List list={list} user={user} dataSource={list} loading={loading}/>
        </Container>
    )
};
const Container = styled.div`
padding: 3.2rem;

` 
export default ProjectList;
