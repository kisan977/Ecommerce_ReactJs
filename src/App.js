import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shoppage/ShopPage.component';
import Header from './components/header/Header.component';
import SignInSignUp from './pages/signin-and-signup/SignInSignUp.component';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInSignUp}/>

      </Switch>
    </div>
 
  
  );
}

export default App;
