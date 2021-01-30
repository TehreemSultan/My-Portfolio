import React from 'react';
import Header from './components/Header';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

class App extends React.Component {
  render(){
  return (
    <>
    <Header/>
    <Router>
      <Route exact path='/' component={Home}/>
      <Route exact path='/AboutMe' component={AboutMe}/>
      <Route exact path='/Projects' component={Projects}/>
      <Route exact path='/ContactMe' component={ContactMe}/>
    </Router>
    </>
  );}
}

export default App;
