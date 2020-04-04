import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="Manifesto" />
        <PostLink id="Love Challenge Let s Get Coding" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </Layout>
  );
}
