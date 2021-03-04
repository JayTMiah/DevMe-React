import { Component } from 'react';

const getPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
    response.json()
  );
};

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
    console.log('Init');
  }

  componentDidMount() {
    console.log('Mounted');
    getPosts().then((posts) => this.setState({ posts: posts }));
  }

  componentDidUpdate() {
    console.log('Updating');
  }

  componentWillUnmount() {
    console.log('Unmount');
  }

  render() {
    console.log('Render');

    const { posts } = this.state;
    return (
      <section>
        <header>
          <h2>Posts Archive</h2>
        </header>
        {posts.map((post, i) => (
          <article key={i}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </article>
        ))}
      </section>
    );
  }
}

export default Posts;
