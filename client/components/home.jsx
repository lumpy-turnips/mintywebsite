import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';


export default React.createClass ({
  render() {
    return (
      <div className="Home">
        {Header}
        <div className="container">
          <h1>Stuck Trying to Debug Your Node App?</h1>
          <h2 className="minty">Minty.js Will Make Your Code Minty-Fresh</h2>
          <p>
          Run your code through Minty.js to see the state of your variables as each line executes. Can't figure out why you're not getting the output you expect? Minty.js will help you see exactly where things go off the rails.
          </p>
          <h3>npm install -g minty</h3>
          <p>
          Minty.js is an npm module you install and run on your own development environment, and which outputs to a file in that environment, so that you can be confident you'll get the same results in debugging that you get in production.
          </p>
          <div>
            <div className="centered">
              <div className="row">
                <div className="one-half column">
                  <a href="https://nodei.co/npm/minty/"><img src="https://nodei.co/npm/minty.png" /></a>
                </div>
                <div className="one-half column">
                  <a href="https://github.com/lumpy-turnips/minty"><img src="./GitHub-Mark-64px.png" /></a>
                </div>
              </div>
            </div>
          </div>
          <p>
          </p>
          <h3>Note on Security</h3>
          <p>
          Your code is yours, and your data is yours — your debugging results should be as well. None of your work ever leaves your development environment when you use Minty.js.
          </p>
        </div>
      </div>
    )
  }
});
