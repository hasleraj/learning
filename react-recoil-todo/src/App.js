import { RecoilRoot } from 'recoil';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

// Components
import Navbar from './components/navbar';

// Containers
import About from './containers/about';
import Main from './containers/main';

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;
