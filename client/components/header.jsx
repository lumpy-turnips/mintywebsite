import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'

module.exports = (
  <div className="container">
    <div className="small">
      <h1 className="logo"><Link to={'/'}>MintyJS</Link></h1>
      <h2 className="slogan">
        <a href="https://nodejs.org/">Node.js</a> process visualization</h2>
      <div className="row nav">
        <div className="six columns nav-bar">
          <div className="row">
            <div className="four columns">
              <Link className="button button-primary nav-button" to={'/example'}>Example</Link>
            </div>
            <div className="four columns">
              <Link className="button button-primary nav-button" to={'about'}>About</Link>
            </div>
            <div className="four columns">
              <Link className="button button-primary nav-button" to={'docs'}>Docs</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="large">
      <div className="row nav">
        <div className="five columns">
          <div className="row">
            <h1 className="logo"><Link to={'/'}>MintyJS</Link></h1>
            <h2 className="slogan">
              <a href="https://nodejs.org/">Node.js</a> process visualization
            </h2>
          </div>
        </div>
        <div className="seven columns nav-bar">
          <div className="row">
            <div className="four columns">
              <Link className="button button-primary nav-button" to={'/example'}>Example</Link>
            </div>
            <div className="four columns">
              <Link className="button button-primary nav-button" to={'about'}>About</Link>
            </div>
            <div className="four columns">
              <Link className="button button-primary nav-button" to={'docs'}>Docs</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
