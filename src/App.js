import React from 'react';
import {Route,Link,Router,Switch} from 'react-router-dom'
import HomePage from './pages/homepage/homepage-component'
import  './App.css';
import Header from  './components/header/header-component';

import Test1 from './components/test-component';
import HatsPage from './pages/hatspage/hatspage-component' ;
import ShopPage from './pages/shop/shop-component' ;
function App() {
  return (
<div>
    <Header/>
<Switch>

    <Route exact path='/' component={HomePage}/>
    <Route exact path='/hats' component={HatsPage}/>
        <Route exact path='/test' component={Test1} />
        <Route exact path='/shop' component={ShopPage} />
</Switch>

      </div>


  );
}

export default App;
