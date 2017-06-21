import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Cv extends Component {
  render () {
    return (
      <div className="cv">
        <h1>Curriculum vitae</h1>
        <div className="cv_block_skill">
          <div className="cv_left">
            <h2>Skill</h2>
          </div>
          <div className="cv_rigth">
            <ul>
                <li>Markup: HTML5, CSS3 (responsive design);</li>
                <li>Programming languages: JavaScript;</li>
                <li>Basic knowledge of React.js (redux, react-router)</li>
                <li>Understanding frameworks: jQuery, Materialize, Twitter Bootstrap;</li>
                <li>Preprocessor:Haml, Less, Stylus;</li>
                <li>Graphic Editor: Adobe Photoshop (Basic);</li>
                <li>Build tools: Gulp;</li>
                <li>Experience with JIRA;</li>
                <li>Understanding Scrum and Agile.</li>
            </ul>
          </div>
        </div>
        <div className="cv_block_skill">
          <div className="cv_left">
            <h2>Languages</h2>
          </div>
          <div className="cv_rigth">
              <ul>
                  <li>English - Upper-Intermediate</li>
                  <li>Ukrainian - Native</li>
              </ul>
          </div>
        </div>
        <h1>Work experience</h1>
        <div className="cv_block_skill">
          <div className="cv_left">
            <h2>Freelancer QA</h2>
            <p>June 2016 – February 2017</p>
          </div>
          <div className="cv_rigth">
            <ul>
                <li>Test-documentation writing:: checklists, test cases,  bug reports;</li>
                <li>Functional and non-functional testing experience</li>
                <li>Testing types and levels</li>
                <li>Strong knowledge: software testing fundamentals; </li>
                <li>SDLC and bug life cycle;</li>
            </ul>
          </div>
        </div>
        <div className="cv_block_skill">
          <div className="cv_left">
            <h2>Ukrainian charter aviation company</h2>
            <p>June 2011 – June 2016</p>
          </div>
          <div className="cv_rigth">
              <ul>
                  <li>Flight documentation engineer;</li>
                  <li>Day to day communication with National Ukrainian Aviation Department (allowance
                      document proceeding, documents validation, medical documentation support );
                  </li>
                  <li>Preparing documents for business trip;</li>
                  <li>Leading full business trips assistance process (visa preparing, communication with leasing Partners: Pakistan, Portugal, Latvia);</li>
                  <li>Responsible for education in both local and international aviation training centers;</li>
                  <li>Responsible for education in both local and international aviation training centers;</li>
                  <li>Educational budget tracking;</li>
              </ul>
          </div>
        </div>
        <div className="cv_block_skill">
          <div className="cv_left">
            <h2>National Defense Academy of Ukraine</h2>
            <p>September 2008 – April 2011</p>
          </div>
          <div className="cv_rigth">
              <ul>
                  <li>Deputy Head of Educational Department;</li>
                  <li>Educational program and schedule providing;</li>
                  <li>Educational programs tracking and providing corrections in accordance to General Staff regulations;</li>
                  <li>Leading full business trips assistance process (visa preparing, communication with leasing Partners: Pakistan, Portugal, Latvia);</li>
                  <li>Responsible for education in both local and international aviation training centers;</li>
                  <li>Responsible for education in both local and international aviation training centers;</li>
                  <li>Educational budget tracking;</li>
              </ul>
          </div>
        </div>
        <div className="cv_block_skill">
          <div className="cv_left">
            <h2>Education</h2>
            <p>2003 – 2008</p>
          </div>
          <div className="cv_rigth">
              <ul>
                  <li>Taras Shevchenko Kiev National University, Military Institute Kiev, Ukraine;</li>
                  <li>Politology Master’s degree;</li>
              </ul>
          </div>
        </div>
      </div>
    );
  }
};
