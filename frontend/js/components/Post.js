import React from 'react';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    $.ajax({
      url: '/getpost/' + this.props.params.postLink,
      success: function (data) {
        this.setState({
          post: data
        });
      //console.log(data);
      }.bind(this)});
  }
  render() {
    if (this.state.post) {
      return (
        <main>
          <article>
            <h2>{this.state.post.title}</h2>
            <p>{this.state.post.text}</p>
          </article>
        </main>
      );
    } else {
      return (
        <main>
          Loading...
        </main>
      );
    }
  }
}
