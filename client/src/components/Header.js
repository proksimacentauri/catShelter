import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderLoggedInContent() {
    if (this.props.auth == null) {
      return;
    }
    if (this.props.auth == false) {
      return (
        <li>
          <Link to="/login">Log in</Link>
        </li>
      );
    }

    return [
      <li>
        <a href="/logout">Log out</a>
      </li>
    ];
  }
  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            className="left brand-logo"
            to={this.props.auth ? '/dashboard' : '/'}
          >
            Cat shelter
          </Link>

          <ul className="right">
          <li><Link to="/catlist">adopt a cat!</Link></li>
          {this.renderLoggedInContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps)(Header);
