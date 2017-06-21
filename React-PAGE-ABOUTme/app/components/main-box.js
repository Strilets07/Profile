import React, {Component} from 'react';
import {Link} from 'react-router'

export default class MainBox extends Component {
  render () {
    return (
      <div>
        <div className="header">
            <p className="header_left"><Link to={"/"}>STRILETS OLEKSANDR</Link></p>
          <ul className="header_rigth">
              <li className="header_rigth_item"><Link to={"/photography"}>Photography</Link></li>
              <li className="header_rigth_item"><Link to={"/cv"}>CV</Link></li>
              <li className="header_rigth_item"><Link to={"/contact"}>Contact</Link></li>
          </ul>
        </div>
        <main>
        {this.props.children}
        </main>
      </div>
    );
  }
};
