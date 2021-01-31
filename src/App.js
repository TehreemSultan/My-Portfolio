import React from 'react';
import Header from './components/header';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './components/home';
import AboutMe from './components/aboutme';
import Projects from './components/projects';
import ContactMe from './components/contactme';

class App extends React.Component {
  render(){
  return (
    <>
    <Router>
      <Header/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/AboutMe' component={AboutMe}/>
      <Route exact path='/Projects' component={Projects}/>
      <Route exact path='/ContactMe' component={ContactMe}/>
    </Router>
    </>
  );}
}

export default App;
