import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    $.ajax({
      url: '/getpostlist',
      success: function (data) {
        this.setState({
          posts: data
        });
      }.bind(this)
    });
  }
  render() {
    if (this.state.posts) {
      var articles = [];
      //console.log(this.state.posts);
      //console.log(this.state.posts[0]);
      var posts = this.state.posts;
      for (var i = 0; i < posts.length; i++) {
        articles.push(
          <article key={posts[i].id.toString()}>
            <h2>
              <Link to={"post/" + posts[i].id}>
                {posts[i].title}
              </Link>
            </h2>
            <p>
              {posts[i].text}
            </p>
          </article>
        );
      }
      return (
        <main>
          {articles}
        </main>
      );
    } else {
      return (
        <main>
          Loading...
        </main>
      )
    }
  }
}
