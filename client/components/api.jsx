import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';

export default React.createClass ({
  render() {
    return (
      <div className="docs">
        {Header}
        <div className="container">
          <h1>Docs</h1>

          <ul>
            <li><a href="#installation">Installation</a></li>
            <li><a href="#use">Using</a></li>
            <li><a href="#Output">Output</a></li>
          </ul>
          <h2>Installation</h2>
          <p>
          <code>npm install -g minty</code> so that you can use it whenever a project needs debugging.<br />
          Or <code>npm install --save-dev minty</code> to use minty in a single project.
          </p>
          <p>
          <em>Please make sure minty does not run in your production environment.</em>
          </p>

          <h2>Using</h2>
          <p>
          You can use Minty to analyze an entire file, tracking execution from beginning to end; or, a single function within a larger file &mdash; for instance, middleware in an Express app.
          </p>
          <h3>With Whole Files</h3>
          <p>
          To analyze a whole file using Minty:
            <ol>
              <li>
              Create an empty stub file (e.g. minty-test.js).
              </li>
              <li>
              At the top of your file, add <code>const minty = require ('minty');</code>
              </li>
              <li>
              Add <code>minty.file(//path to file);</code> to your stub.
              </li>
              <li>
              From the Terminal, <code>node minty-test.js</code> to generate output.
              </li>
            </ol>
          </p>


          <h3>With Single Functions</h3>
          <p>
          To analyze only a single function (or more than one function!) in a file:
            <ol>
              <li>
              At the top of your file, add <code>const minty = require ('minty');</code>
              </li>
              <li>
              Mintify the function you want to analyze by wrapping it: <code>var newFunc = mint.wrap(initialFunc);</code>
              </li>
              <li>
              Call your mintified function <code>newFunc()</code>
              </li>
              <li>
              Run your code as usual to generate output.
              </li>
            </ol>
          </p>

          <h2>Output</h2>
          <p>
          Minty will generate an html file you can load in your browser.
            <ol>
              <li>
              Open the Minty folder in your approot.
              </li>
              <li>
              Open either the file or the function folder, depending on whether you analyzed a file or a folder.
              </li>
              <li>
              Open the minty.html file in your preferred browser.
              </li>
              <li>
              Use the back and forward buttons, or the hjkl keys, to move through your script's execution.
              </li>
            </ol>
          </p>
          <h3>Sharing</h3>
          <p>
          Currently, you must share the minty.html and the mintyVis.js file. All results will be packaged in minty.html in a future release, coming soon. All code and variable states are in mintyVis, so your teammates will be able to see everything they need with these two files.
          </p>
        </div>
      </div>
    )
  }
});
