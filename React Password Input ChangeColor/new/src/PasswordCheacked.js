import React, { Component } from 'react';


class PasswordCheacked extends Component {
  constructor(props) {
    super();
      this.state = {text: '', counter: 0, width: '10%' };
      this.handleChange = this.handleChange.bind(this);
      this.checkChar = this.checkChar.bind(this);
  }

handleChange(e) {
  this.setState({
    text: e.target.value
  });
}
checkChar() {
  return this.state.text.length >=6;
}
checkCharBig  () {
  let a = this.state.text;
  return (a.match(/[A-Z]/g));
}
checkCharSmall  () {
  let a = this.state.text;
  return (a.match(/[a-z]/g));
}



componentWillMount() {
  setInterval(this.timer)
  this.timer = setInterval(this.tick.bind(this), 1000)
}
tick() {
  this.setState({counter: (this.state.counter + 1)})
}
restart() {
  this.setState({counter: (0)})
}
componentDidMount() {
  clearInterval(this.timer)
}

chahgePize() {}


render () {
  return(
    <div className="">
      <input
        type="text"
        placeholder="username"
        onChange={this.handleChange}
      />
      <div className="">
        <ul style={{}}>
          <li className={this.checkChar() ? "passed" : "missing"}>Minimum 6 letter</li>
          <li className={this.checkCharBig() ? "passed" : "missing"}>Minimum 1 BIG letter</li>
          <li className={this.checkCharSmall() ? "passed" : "missing"}>Minimum 1 SMALL letter</li>
        </ul>
      </div>
      <button onClick={this.componentWillMount.bind(this)}> Start </button>
      <button onClick={this.componentDidMount.bind(this)}> Stop </button>
      <button onClick={this.restart.bind(this)}> Restart </button>
      <h2>{this.state.counter}</h2>

    </div>

  );
}
}

export default PasswordCheacked;
