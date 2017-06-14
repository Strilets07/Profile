import React, { Component, PropTypes } from 'react'
import ChangeInput from './ChangeInput'
import CloseCase from './CloseCase'

const Task = React.createClass({
  render () {
      let data = this.props.data;
      return (
          <ul className="section_list">
            <ChangeInput data={data} />
          </ul>
        );
      }
});


export default Task;
