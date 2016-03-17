import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';

export default React.createClass ({
  render() {
    return (
      <div className="about">
        {Header}
        <div className="container">
          <h1>About</h1>
        </div>
      </div>
    )
  }
});
