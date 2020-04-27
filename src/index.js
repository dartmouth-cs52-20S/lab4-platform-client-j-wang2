import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './style.scss';

const App = (props) => {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
};

const About = (props) => {
    return <div> All there is to know about me </div>;
};

const Welcome = (props) => {
    return <div>Welcome</div>;
};

ReactDOM.render(<App />, document.getElementById('main'));
