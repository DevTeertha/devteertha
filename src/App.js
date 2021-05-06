import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Snow from 'react-snow-effect';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Snow></Snow>
          <Home></Home>
        </Route>
        <Route path="/about">
          <Snow></Snow>
          <About></About>
        </Route>
        <Route path="/projects">
          <Snow></Snow>
          <Projects></Projects>
        </Route>
        <Route path="/contact">
          <Snow></Snow>
          <Contact></Contact>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
