import * as React from 'react';
import ProjectList from '../Project';

interface IAuthicatedProps {
}

const Authicated: React.FunctionComponent<IAuthicatedProps> = (props) => {
  return(<div>
      <ProjectList/>
  </div>)
};

export default Authicated;
