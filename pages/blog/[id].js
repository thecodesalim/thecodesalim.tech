import { useRouter } from "next/router";
import Layout from "../../components/MyLayout";
const ReactMarkdown = require("react-markdown");
import React, { Component } from "react";
import matter from "gray-matter";

const Post = (props) => {
  const router = useRouter();
  console.log(router.query);
  return (
    <Layout bg="rgb(246, 247, 248)">
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
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            color: black;
            grid-column: 3/9;
            justify-self: center;
          }
        `}
      </style>
    </Layout>
  );
};

Post.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const res = await import(`../../posts/${id}.md`);
  const post = await res.default;

  console.log("post", matter(post));
  return { post };
};

export default Post;
