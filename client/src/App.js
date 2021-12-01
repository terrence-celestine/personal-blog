import { useState, useEffect } from "react";

import "./App.css";

function App() {
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
  return (
    <div id="wrapper">
      <header className="top-bar">
        <h1>Dev Tee Cee</h1>
      </header>
      <div className="main-section-wrapper">
        <main id="main-container">
          <section>{postsList}</section>
        </main>
        <aside id="sidebar">
          <h4>Hi, I'm Terrence</h4>
          <p>
            I'm a self taught software developer. I love learning new languages,
            problem solving, and collaborating with other developers to make
            great products.
          </p>
          <ul>
            <li>Follow Me:</li>
            <li>
              <a href="https://www.linkedin.com/in/terrence-celestine-803b1193/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/terrence-celestine">Github</a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default App;
