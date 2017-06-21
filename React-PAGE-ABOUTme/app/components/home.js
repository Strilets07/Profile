import React, {Component} from 'react';

export default class Home extends Component {
  render () {
    return (
      <div>
        <div className="home">
          <div className="home_left">
            <h1>Gets the job done</h1>
          </div>
          <div className="home_rigth">
            <div className="home_rigth_comp"></div>
          </div>
        </div>
        <div className="home_center_text">
          <h1>Mostly working with</h1>
        </div>
        <div className="home_task">
          <div className="home_task_skill">
            <img src="https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful-1/2048/5351_-_CSS3-256.png" alt="css"/>
            <h2>CSS</h2>
            <h4>Making my own plugins with PostCSS? Dont mind if I do.
                Maybe some SASS here and there.Javascript
                React is nice. Lets just use that.
                Otherwise Angular & Ember get the job done.
                Backend
            </h4>
          </div>
          <div className="home_task_skill">
          <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png" alt="js"/>
          <h2>Javascript</h2>
          <h4>React is nice. Lets just use that.
              Otherwise Angular & Ember get the job done.
          </h4>
          </div>
          <div className="home_task_skill">
            <img src="https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/SDKs_copy_nodeJS-256.png" alt="nodejs"/>
            <h2>Backend</h2>
            <h4>Laravel keeps my coffee budget on point.
                Flask does the trick when semicolons get tiring.
            </h4>
          </div>
        </div>
    </div>
    )
  }
};
