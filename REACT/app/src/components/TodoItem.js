import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    completeTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

handleCompleteClick = () => {
      this.props.completeTodo(this.props.todo.id);
    }
deleteTodo = () => {
      this.props.deleteTodo(this.props.todo.id);
    }

    render() {
        const { todo, deleteTodo } = this.props;
        return (
          <li className={classnames({
            completed: todo.completed
            })}>
            <div className=" view ">
                <div className="">
                  <input
                      className="toggle"
                      id={todo.id}
                      type="checkbox"
                      onChange={this.handleCompleteClick}
                  />
                  <label htmlFor={todo.id}>
                    {todo.completed ?
                    <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/like-24.png" alt="#"/> : <img src="https://cdn3.iconfinder.com/data/icons/interface-8/128/InterfaceExpendet-07-24.png" alt="#"/>}
                  </label>
                </div>
                <div className="test">
                  <label className="section_list_data_name">
                    {todo.text}
                  </label>
                </div>
                <div>
                  <img
                    className="delete"
                    id={todo.id}
                    onClick={this.deleteTodo}
                    src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/close2-24.png"
                  />
                </div>
            </div>
          </li>
        )
      }
    }
