
import ProjectList from './screens/project-list';
import { UnAuthenticated } from './unauthenticated-app';
import "antd/dist/antd.less"
function App() {
  return (
    <div className="App">
     <ProjectList/>
     <UnAuthenticated/>
    </div>
  );
}

export default App;
