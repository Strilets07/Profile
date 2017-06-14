var my_task = [
  {
    id: '1',
    name: 'Complete Task',
    time: 'Total time is 00:00',
    button: 'Start'
  },
  {
    id: '2',
    name: 'Complete Task',
    time: 'Total time is 00:00',
    button: 'Start'
  }
];


var Task = React.createClass({
  getInitialState: function() {
    return {
      visible: false,
      inputState: true
    };
  },
  inputChecked: function() {
    this.state.inputState ? this.setState({inputState: false}) : this.setState({inputState: true});
  },
  deleteTask: function(e) {
    e.preventDefault();
    this.state.visible ? this.setState({visible: false}) : this.setState({visible: true});
  },
  render: function() {
      var data = this.props.data;
      var visible = this.state.visible;
      var th = this;
    var template = data.map(function(item, index){
      return (
          <li className='list-data' key={index} style={{borderBottom: '1px solid #d9d9d9', marginBottom: '15px', paddingBottom: '10px', fontSize: '16px', height: '30px',width: '500px'}} >
            <div className={" task "+ (!visible ? '': 'none')}>
              <div className="checkedInput" style={{width: '25px', height: '25px', float: 'left', marginTop: '0'}}>
                <input id={item.id} type="checkbox" style={{display: 'none'}} onChange={th.inputChecked} />
                <label htmlFor={item.id}>
                  {th.state.inputState ? <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/like-24.png"/> : <img src="https://cdn0.iconfinder.com/data/icons/ikooni-outline-free-basic/128/free-05-24.png"/>}
                </label>
              </div>
              <ladel className="name-list" style={{marginLeft: '10px',fontSize: '20px'}}>{item.name}</ladel>
              <span className="time" style={{marginLeft: '100px'}}>{item.time}</span>
              <button className="start" style={{marginLeft: '10px',borderRadius: '3px',fontSize: '16px',color: 'inherit', background: 'none',width: '100px', outlinStyle: 'none'}}>{item.button}</button>
            </div>
            <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/close2-24.png" className={'imageClose'} onClick={th.deleteTask} style={{float: 'right', marginTop: '-24px', marginRight: '-30px'}} alt=""/>
          </li>
        );
      })
      return (
          <ul className="my-list" style={{padding: '5px', listStyleType: 'none', marginBottom: '15px'}}>
            {template}
          </ul>
        );
      }
});

var ItemList = React.createClass({
  render: function(){
    return (
      <section className="list" style={{width: '550px',border: '1px solid #d9d9d9',borderRadius: '5px'}}>
          <Task data={my_task}/>
      </section>
    );
  }
});


var App = React.createClass({
render:function(){
  return (
    <div className="app" style={{margin: 'auto', display: 'table'}}>
      <h1 className="mainText" style={{textAlign: 'center', color: 'rgba(33, 150, 243, 0.8)'}}>Create yours Plans</h1>
      <ItemList/>
    </div>
  );}});



ReactDOM.render(<App/>,
  document.getElementById('root')
);
