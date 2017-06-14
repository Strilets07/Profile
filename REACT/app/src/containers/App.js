import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import Footer from '../components/Footer'
import * as TodoActions from '../actions'


const App = props => (
    <div>
      <Header addTodo={props.actions.addTodo} />
      <MainSection {...props} />
      <Footer {...props} clearCompleted={props.actions.clearCompleted}/>
    </div>
  )

  const mapStateToProps = state => ({
    todos: state.todos.todos,
    timerActive: state.todos.timerActive,
    timerTodo: state.todos.timerTodo,
    total: state.todos.total,
  })

  const mapDispatchToProps = dispatch => ({
      actions: bindActionCreators(TodoActions, dispatch)
  })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
