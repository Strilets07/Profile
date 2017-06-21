import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Contact extends Component {
  render () {
    return (
      <div className="contact">
        <h1>Contact me thought the form, or any of the following social media</h1>
          <div className="contact_social">
              <a  href="https://github.com/Strilets07" className="contact_social_a">
                <img  src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-64.png" alt="GitHub"/>
              </a>
              <a href="https://linkedin.com/in/strilets" className="contact_social_b">
                <img  src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/linkedin_circle-64.png" alt="linkedin"/>
              </a>
              <a href="https://www.facebook.com/strelecsasha" className="contact_social_c">
                <img  src="https://cdn1.iconfinder.com/data/icons/social-media-icon-1/112/facebook-64.png" alt="facebook"/>
              </a>
          </div>
          <div className="contact_info">
            <ul>
                <li>Contact information:</li>
                <li>Cell phone: +38067 224 81 99</li>
                <li>E-mail: strilets0702@gmail.com</li>
            </ul>
          </div>
      </div>
    );
  }
};
