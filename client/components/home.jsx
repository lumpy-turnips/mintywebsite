import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';


export default React.createClass ({
  render() {
    return (
      <div className="Home">
        {Header}
        <div className="container">
          <h1>Home</h1>
        </div>
      </div>
    )
  }
});
