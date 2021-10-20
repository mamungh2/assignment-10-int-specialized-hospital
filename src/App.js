import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Footer from './components/Shared/Footer/Footer';
import Donate from './components/Donate/Donate';
import Career from './components/Career/Career';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Services from './components/Services/Services';
import Researches from './components/Home/Researches/Researches';
import ServiceDetails from './components/Services/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="App">
      {/* use authprovider to get all data within its child from context api */}
      <AuthProvider>
        <Router>
          {/* share component */}
          <Header></Header>

          {/* all switch to route various component */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <Route exact path="/services">
              <Services></Services>
            </Route>

            <Route path="/services/:details">
              <ServiceDetails></ServiceDetails>
            </Route>

            <Route path="/research">
              <Researches></Researches>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/signup">
              <Signup></Signup>
            </Route>

            {/* private route  */}
            <PrivateRoute path="/donate">
              <Donate></Donate>
            </PrivateRoute>
            <PrivateRoute path="/career">
              <Career></Career>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          {/* share component */}
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
