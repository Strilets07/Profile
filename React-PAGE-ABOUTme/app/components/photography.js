import React, {Component} from 'react';
import axios from 'axios';


export default class Photography extends Component {

  state = {
    posts: [],
    loading: true,
    error: null
  }

  componentDidMount () {
    axios.get('https://api.unsplash.com/photos/?client_id=e0f66caecac2a7f96712b5481015a0ba51b346264ad3b52afe712bf702acf015')
      .then(res => {
        this.setState({
          posts: res.data,
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
    <div className="loading">Loading</div>
  );
}

renderError() {
  return(
    <div>Something went wrong {this.state.error.message}</div>
 );
}

renderPosts() {
  const { error, posts } = this.state;

  if(error) {
    return this.renderError;
  }

  return (
    <ul className="photo">
      {posts.map(post =>
     <li className="photo_item" key={post.id} ><img src={post.urls.regular} alt=""/></li>
      )}
    </ul>
  );
}
  render() {
    const {loading} = this.state;

    return (
      <div className="photo_wr">
        <h1>Photography</h1>
        { loading ? this.renderLoading() : this.renderPosts()}
      </div>
      );
  }
}
