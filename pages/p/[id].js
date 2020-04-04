import { useRouter } from 'next/router';
import Layout from '../../components/MyLayout';
const ReactMarkdown = require('react-markdown')
import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch';
import matter from 'gray-matter'


const Post = props => {
  const router = useRouter();
  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
      <ReactMarkdown source={props.post} />
    </Layout>
  );
}

Post.getInitialProps = async function(context)  {
  const { id } =  context.query
  const res = await import(`../../blogs/${id}.md`)
  const post = await res.default

  console.log('post', matter(post))
  return { post }
  
}

export default Post
