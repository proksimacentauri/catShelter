import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import Landing from './Landing';
import Header from './Header'; 
import CatList from './CatList';
import RegistrationPage from './RegistrationPage';
import CatNew from './CatNew';
import CatProfile from './CatProfile';
const DashBoard = () => <h2>DashBoard</h2>;



class App extends Component 
{
 componentDidMount()
 {
    this.props.fetchUser();
 }  

    render()
    {
     return (
         <div className="container">
        <BrowserRouter>
        <div>
            <Header/>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/catlist" component={CatList}/>
            <Route exact path="/cats/:id"  component={CatProfile}/>
            <Route path="/catlist/new" component={CatNew}/>
            <Route path="/Login" component={RegistrationPage}/>
        </div>
        </BrowserRouter>
         </div>
     );
    }

}

export default connect(null, actions)(App);