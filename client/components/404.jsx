import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';

export default React.createClass ({
  render() {
    return (
      <div className="four-oh-four">
        {Header}
        <h1>404</h1>
      </div>
    )
  }
});
