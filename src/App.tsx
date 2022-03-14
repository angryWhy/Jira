
import ProjectList from './screens/project-list';
import { UnAuthenticated } from './unauthenticated-app';
import "antd/dist/antd.less"
import { Authenticated } from './authenticated-app';
function App() {
  return (
    <div className="App">
      {/* <ProjectList/>  */}
      <Authenticated/>
     {/* <UnAuthenticated/> */}
    </div>
  );
}

export default App;
