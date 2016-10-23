import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <header>
        <div id="logo">
          <h1><Link to="/">Web.Tech@BUPT</Link></h1>
        </div>

        <nav>
          <ul>
            <li><Link to="#">contact</Link></li>
            <li><Link to="#">about</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
})
