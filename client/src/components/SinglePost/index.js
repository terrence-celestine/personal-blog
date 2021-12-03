import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import parse from "html-react-parser";

export default function SinglePost() {
  let urlParams = useParams();
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    fetch(`/posts/${urlParams.postHandle}`)
      .then((res) => res.json())
      .then((res) => setPostData(res));
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
