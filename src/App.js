import React from 'react';
import {Route,Link,Router} from 'react-router-dom'
import HomePage from './pages/homepage/homepage-component'
import  './App.css';

import Test1 from './components/test-component';
import HatsPage from './pages/hatspage/hatspage-component' ;
function App() {
  return (
<div>


    <Route exact path='/' component={HomePage}/>
    <Route exact path='/hats' component={HatsPage}/>
        <Route exact path='/test' component={Test1} />


      </div>


  );
}

export default App;
