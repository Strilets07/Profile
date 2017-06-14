import React, { PropTypes, Component } from 'react'

export default class Footer extends Component {
  static propTypes = {
    clearCompleted: PropTypes.func.isRequired
  }

  deleteAllTodo = () => {
    this.props.clearCompleted();
  }

  render() {
    return (
      <footer className="footer">
        <button
          type="button"
          onClick={this.deleteAllTodo}>
          Close all Completed TASK!
        </button>
      </footer>
    )
  }
}
