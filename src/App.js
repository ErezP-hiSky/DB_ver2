import React from 'react';
import {
  BrowserRouter as Router, Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Management from './containers/Management';
import Technician from './containers/Technician';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  
  return (
    <Router>
      <div className="App">
      <Header/>
      <Nav />
        <div className="App-header">
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/management" component={Management} />
            <Route path="/technician" component={Technician} />
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
    
  );
}



export default App;
