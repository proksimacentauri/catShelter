import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

import Header from './Header'; 
const DashBoard = () => <h2>DashBoard</h2>;
const AddCat = () => <h2>addCat</h2>;
const CatList = () => <h2>CatList</h2>;
const Landing = () => <h2>Landing</h2>;
const LogIn = () => <h2>LogIn</h2>;

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
            <Route path="/catlist/new" component={AddCat}/>
            <Route path="/dashboard" component={DashBoard}/>
            <Route path="/Login" component={LogIn}/>
        </div>
        </BrowserRouter>
         </div>
     );
    }

}

export default connect(null, actions)(App);