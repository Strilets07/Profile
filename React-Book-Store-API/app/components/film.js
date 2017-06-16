import React, {Component} from 'react';
import axios from 'axios';


export default class Film extends Component {

  state = {
    posts: [],
    loading: true,
    error: null
  }

  componentDidMount () {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=Harry&key=AIzaSyDe_UTBdd38_moo2cGILnJrlPi8zeGVj70#')
      .then(res => {
        this.setState({
          posts: res.data.items,
          loading: false,
          error: null
        });
       })

      .catch(err => {
        this.setState({
          loading: false,
          error: err
        });
  });
}

renderLoading() {
  return (
    <div>Loading...</div>
  );
}

renderError() {
  return(
    <div>Something going wrong {this.state.error.message}</div>
 );
}

renderPosts() {
  const { error, posts } = this.state;

  if(error) {
    return this.renderError;
  }

  return (
    <ul>
      {posts.map(post => {
        post = post.volumeInfo;
       return (
         <li className="block" key={post.id} >
            <img className="block-img" src={post.imageLinks.smallThumbnail} alt="#"/>
            <div className="block-text">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <a href="link/html-text-link.htm">Buy</a>
            </div>
         </li>
       )
      })}
    </ul>
  );
}
  render() {
    const {loading} = this.state;

    return (
      <div>
        { loading ? this.renderLoading() : this.renderPosts()}
      </div>
      );
  }
}
