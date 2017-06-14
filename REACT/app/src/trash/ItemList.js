import React from 'react';
import Task from './Task';

const my_task = [
  {
    id: '1',
    name: 'Complete Task',
    time: 'Total time',
    button: 'Start'
  }

];

var ItemList = React.createClass({
  render () {
    return (
      <section className="section">
          <Task data={my_task}/>
      </section>
    );
  }
});


export default ItemList;
