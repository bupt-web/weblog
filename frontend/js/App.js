import React from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import Aside from './components/Aside'

require('../css/style.less')

export default React.createClass({
  render() {
    return (
      <div>
        <Header />

        {this.props.children}

        <Aside />
        <Footer />
      </div>
    );
  }
});
