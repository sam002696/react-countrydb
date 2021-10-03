import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Countries from './components/Paths/Countries';
import Home from './components/Paths/Home';
import NotFound from './components/Paths/NotFound';
import CountryCode from './components/Paths/CountryCode';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/about">

        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/country/:countryCode">
          <CountryCode></CountryCode>
        </Route>
        <Route exact path="/countries">
          <Countries></Countries>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;