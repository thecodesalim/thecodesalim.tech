import { useRouter } from "next/router";
import Layout from "../../components/MyLayout";
const ReactMarkdown = require("react-markdown");
import React, { Component } from "react";
import matter from "gray-matter";

const content = {
  color: "black",
};

const Post = (props) => {
  const router = useRouter();
  return (
    <Layout bg='#ebecf0'>
      <div className="content">
  {/*<h1>{router.query.id}</h1>*/}
        <ReactMarkdown source={props.post} />
      </div>
      <style jsx global>
        {`
          .layoutStyle {
            background-color: #ebecf0;
          }
          .content {
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            color: black;
            grid-row: 1;
            grid-column: 2;
            justify-self: center;
          }
        `}
      </style>
    </Layout>
  );
};

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await import(`../../posts/${id}.md`);
  const post = await res.default;

  console.log("post", matter(post));
  return { post };
};
export default Post;
