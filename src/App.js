import React,{useState,useEffect} from 'react';
import Header from './components/header';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Background from './components/background'
import Skills from './components/skills';
import Loading from './components/loading'




 function App(){
 
 
  
  return (
    <>
   
    <Router>
      <Header/>
      <Background/>

      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/skills' component={Skills}/>
      <Route exact path='/projects' component={Projects}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/loading' component={Loading}/>
    </Router>
    </>
  );}


export default App;
