import React, { Component } from 'react';
import  {connect} from 'react-redux';

class Header extends Component {
   renderContent() 
   {
    if (this.props.auth == null) {
        return;
    }
    if (this.props.auth == false) {
        return (<li><a href="/login">Log in</a></li>);
    } 

    return [<li><a href="/logout">Log out</a></li>];
   }
    render() 
    {
        console.log(this.props)
     return(
         <nav>
          <div className="nav-wrapper">
          <a className="left brand-logo" href="/">Cat shelter</a>
          <ul className="right">
            <li>
                <a>
                   {this.renderContent()}
                </a>
            </li>
          </ul>
          </div>   
         </nav>
     );
    }
}

function mapStateToProps({auth}) {
 return {
     auth
 };
}

export default connect(mapStateToProps)(Header);