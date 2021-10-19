import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Footer from './components/Shared/Footer/Footer';
import Donate from './components/Donate/Donate';
import Career from './components/Career/Career';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
        </Switch>
        <Route path="/donate">
          <Donate></Donate>
        </Route>
        <Route path="/career">
          <Career></Career>
        </Route>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
