import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shoppage/ShopPage.component';
import Header from './components/header/Header.component';
import SignInSignUp from './pages/signin-and-signup/SignInSignUp.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
      currentUser : null
    }
  }
unsubscribeFromAuth = null;



componentDidMount() {
 this.unsubscribeFromAuth =  auth.onAuthStateChanged(user=>{
    this.setState({currentUser:user});
    console.log(user);
  })
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}






  render(){
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInSignUp}/>
  
        </Switch>
      </div>
   
    
    );
  }
  
}

export default App;
