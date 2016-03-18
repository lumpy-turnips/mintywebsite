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
          <p>
          Minty.js was created by <a href="https://github.com/tzilist">Ted Zilist</a>, <a href="https://github.com/angieyeh">Angie Yeh</a>, and <a href="https://github.com/juniorbird">Wade Armstrong</a>. Ted, Angie, and Wade met at <a href="https://www.codesmith.io/">Codesmith's Developer Bootcamp</a>, where they discovered a shared passion for helping developers be more productive &mdash; and digging into the depths of how Javascript apps work.
          </p>
          <h2>We Love PythonTutor</h2>
          <p>
          Have you tried <a href="http://pythontutor.com/">PythonTutor</a>? It's an eye-opening tool that helps developers walk through their code's execution. Ted, Angie, and Wade all love PythonTutor, and have come to  rely on it. But PythonTutor doesn't support apps made up of multiple documents; or databases; or all of the components that live in your development environment.
          </p>
          <p>
          That's where Minty comes in.
          </p>
          <p>
          We wanted to make a tool that would bring the brilliance of PythonTutor to your complex Node app. Dig into how processes execute across multiple pages; generate output that you can share with your teammates; use your own sensitive, proprietary data and libraries without worrying about where all that will end up. That's Minty!
          </p>
        </div>
      </div>
    )
  }
});
