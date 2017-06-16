import React, {Component} from 'react';

export default class SearchBox extends Component {
  render () {
    return (
      <div className="imgBlock">
          <img src="" alt=""/>
          <div>{this.props.children}</div>
      </div>
    );
  }
};
