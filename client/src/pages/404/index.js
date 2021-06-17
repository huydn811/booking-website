import React, { Component } from 'react';
import './notfound.scss';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <div className="not-found">
          <legend>
            4
            <span>0</span>
            4
          </legend>
          <fieldset>NOT FOUND</fieldset>
          <Link to="/" className="navLink-404">
            <span>Click Go To Home Page</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
