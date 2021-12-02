import { useState, useEffect } from "react";

function Home() {
  const [posts, setPosts] = useState([
    {
      id: 0,
      title: "Hello World",
      date: "Jan 1, 2022",
      excerpt:
        "I recently gave a talk on “Making Sense of Performance Metrics” at the Web Unleashed Conference, and it was suggested that I turn the breakdown of all the performance metrics into a cheatsheet; so here it is! The full cheatsheet, including a downloadable PDF version, are at the bottom of...",
    },
  ]);

  const postsList = posts.map((post) => (
    <article key={post.id}>
      <header>
        <h2>{post.title}</h2>
      </header>
      <div className="post-meta">
        <span>{post.date}</span>
      </div>
      <div className="excerpt">
        <p>{post.excerpt}</p>
      </div>
    </article>
  ));
  return <section>{postsList}</section>;
}

export default Home;
