import * as React from 'react';
import { useState } from 'react';
import Register from '../Register';
import ProjectList from '../Project/index';

interface IUnauthAppProps {
}

const UnauthApp: React.FunctionComponent<IUnauthAppProps> = (props) => {
    const [isRegister, setIsRegister] = useState(true)
  return(
      <div>
          {
              isRegister?<Register/> : <ProjectList/>
          }
          <button onClick={e=>{setIsRegister(!isRegister)}}>进入ProjectList</button>
      </div>
  )
};

export default UnauthApp;
