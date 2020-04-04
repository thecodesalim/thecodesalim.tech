import { useRouter } from 'next/router';
import Layout from '../../components/MyLayout';
const ReactMarkdown = require('react-markdown')
import React, { Component } from 'react'
import termsFrPath from '../../blogs/Manifesto.md'
import fetch from 'isomorphic-unfetch';
import matter from 'gray-matter'

class MD extends Component {
  constructor(props){
    super(props)
    this.state = {post: null}
  }
  async getPost() {
    const { id } =  content.query
    const data = await import(`../../blogs/${id}.md`)
    const  content  = await matter(data.default)

    this.setState({post: content.content})
    console.log(content.content)
  }
  render(){
    this.getPost()
    return(
      <div>
        <p>YA ALLAH!</p>
          <ReactMarkdown source={this.state.post} />
      </div>
    )
  }
}
export default function Post() {
  const router = useRouter();
  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
      <MD />
    </Layout>
  );
}
