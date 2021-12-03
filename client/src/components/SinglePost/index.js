import React, { useState, useEffect } from "react";

import parse from "html-react-parser";

export default function SinglePost() {
  const [postData, setPostData] = useState([
    {
      id: 0,
      title: "Hello World",
      date: "Jan 1, 2022",
      handle: "hello-world",
      excerpt: `<p>I recently gave a talk on “Making Sense of Performance Metrics” at the Web Unleashed Conference, and it was suggested that I turn the breakdown of all the performance metrics into a cheatsheet; so here it is! The full cheatsheet, including a downloadable PDF version, are at the bottom of</p>
      <iframe frameborder=0 
        style="width: 100%;" 
        scrolling="no" 
        seamless="seamless" 
        srcdoc='<html><body><script src="https://gist.github.com/terrence-celestine/9038c91e066fcb6135b11083f460c3a6.js"></script></body></html>'
        ></iframe>`,
    },
  ]);
  useEffect(() => {
    console.log("getting post data from mongodb");
  }, []);
  return (
    <>
      {postData.length > 0 ? (
        <>
          <h2>{postData[0].title}</h2>
          {parse(postData[0].excerpt)}
        </>
      ) : (
        ""
      )}
    </>
  );
}
