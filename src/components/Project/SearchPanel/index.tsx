import * as React from 'react';

interface ISearchPanelProps {
    param:{
        name:string,
        personId:string
    },
    setParam:(param:ISearchPanelProps["param"])=>void,
    users:any
}

const SearchPanel: React.FunctionComponent<ISearchPanelProps> = (props) => {
    const {param,setParam,users} = props

  return(
      <>
          <form>
              <input type={"text"} value={param.name} 
                                   onChange={e=>{setParam({...param,name:e.target.value})}}/>
              <select value={param.personId}
                      onChange={e=>{setParam({...param,personId:e.target.value})}}   
              >
                  <option value="">负责人</option>
                  {
                      users.map( (user :any) => {
                          return <option value={user.id} key={user.id}>{user.name}</option>
                      })
                  }
              </select>
          </form>
      </>
  )
};

export default SearchPanel;
