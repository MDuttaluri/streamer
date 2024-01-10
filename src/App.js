import logo from './logo.svg';
import './App.css';
import { motion } from "framer-motion"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route,Link, BrowserRouter} from "react-router-dom";
import TechStack from './Pages/TechStack';
import Middleware from './Pages/Middleware';
import E404 from './Pages/404';
import HomePage from "./Pages/forms/streamPage";
import Programming from './Pages/Programming';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/tech_stack/front_end" component={TechStack}/>
        <Route exact path="/tech_stack/middleware" component={Middleware}/>
        <Route exact path="/tech_stack" component={TechStack}/>
        <Route exact path="/programming" component={Programming}/>
        <Route exact path="/home" component={LandingPage}/>
        <Route exact path="/" component={LandingPage}/>


        <Route path="/" component={E404}/>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
