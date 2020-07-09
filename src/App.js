import React from 'react';
import {Route,Link,Router,Switch} from 'react-router-dom'
import HomePage from './pages/homepage/homepage-component'
import  './App.css';
import Header from  './components/header/header-component';

import Test1 from './components/test-component';
import HatsPage from './pages/hatspage/hatspage-component' ;
import ShopPage from './pages/shop/shop-component' ;
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up-component.js'
function App() {
  return (
<div>
    <Header/>
<Switch>

    <Route exact path='/' component={HomePage}/>
    <Route  path='/hats' component={HatsPage}/>
        <Route  path='/test' component={Test1} />
        <Route  path='/shop' component={ShopPage} />
        <Route  path='/signin' component={SignInSignUpPage} />
</Switch>

      </div>


  );
}

export default App;
