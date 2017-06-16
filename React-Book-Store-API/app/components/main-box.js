import React, {Component} from 'react';
import {Link} from 'react-router'

export default class MainBox extends Component {
  render () {
    return (
      <div>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/mvc"}></Link></li>
            <li><Link to={"/articles"}>Articles</Link></li>
            <li><Link to={"/film"}>Film</Link></li>
        </ul>
        <main>
        {this.props.children}
        </main>
      </div>
    );
  }
};
