import React, {Component} from 'react';

export default class SearchBox extends Component {
  render () {
    return (
      <div>
          <header> </header>
          <div>{this.props.children}</div>
      </div>
    );
  }
};
