import { useState, useEffect } from "react";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("posts")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  const postsList = posts.map((post) => (
    <article key={post._id}>
      <header>
        <h2>
          <a href={"/posts/" + post.handle}>{post.title}</a>
        </h2>
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
