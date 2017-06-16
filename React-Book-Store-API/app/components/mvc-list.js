import React, {Component} from 'react';
import {Link} from 'react-router'

const teams = [
    'Марк-Андре Тер Штеген',
    "Пике Херард Бернабэу",
    "Альба Хорди Рамос",
    "Маскерано Хавьер",
    "Алеш Видаль",
    "Иньеста Андрес",
    "Арда Туран",
    "Месси Лионельу",
    "Неймар да Силва Сантос Жуниор",
    "Луис Альберто Суарес Диас"
  ];

export default class MvcList extends Component {

state = { searchString: '' }

handelChange = (e) => {

  this.setState({
    searchString: e.target.value.trim().toLowerCase()
  });
}

render () {



  const searchString = this.state.searchString
      var search = teams;
      if (searchString.length > 0){
        search = teams.filter(function(item){
          return item.toLowerCase().match( searchString );
        });
      }

    return (
        <div>
          <form>
              <input type="text" placeholder="Search" value={this.state.searchString} onChange={this.handelChange} name=""/>
          </form>
            <ul>
            {search.map(function(item){
              return(<li key={item}>{item}</li>)
            })}
          </ul>
        </div>
      );
    }
};
