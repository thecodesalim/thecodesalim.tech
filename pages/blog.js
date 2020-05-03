import Layout from "../components/MyLayout";
import Link from "next/link";
import Meta from "../components/Meta";

const PostLink = (props) => (
  <li>
    <h3>
      <Link href="/blog/[id]" as={`/blog/${props.id}`}>
        <a>{props.title}</a>
      </Link>
    </h3>
  </li>
);

export default function Blog() {
  return (
    <>
      <Meta />
      <div>
        <h2 className="header">Blog</h2>
        <p className="intro">
          Candid thoughts and ideas around design, innovation and branding
        </p>
        <ul className="blogs">
          <PostLink id="manifesto" title="Manifesto" />
          <PostLink id="arreview" title="Archive Research: Review" />
          <PostLink
            id="arposters"
            title="Archive Research: Posters for London Underground
"
          />

          <PostLink id="lchallenge" title="Love Challenge Let's Get Coding" />
          <PostLink id="byms" title="Brand You: M&S Food" />
          <PostLink id="streetwear" title="Timeline: Journey into Streetwear" />
          <PostLink id="fcreview" title="First Cut: Review" />
          <PostLink id="fcresearch" title="First Cut: Research" />
          <PostLink id="fcchoice" title="First Cut: Idea" />
          <PostLink id="visualstatistics" title="Visual Statistics" />
          <PostLink id="pedagogy" title="International Pedagogy: How Far?" />
        </ul>
      </div>
      <style jsx global>
        {`
          html {
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          }
          div {
            height: 90vh;
            width: 95vw;
            background-color: rgb(246, 247, 248);
            display: grid;
            grid-template-rows: 1fr 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .header {
            grid-area: 1/2;
            justify-self: center;
          }
          .blogs {
            grid-area: 3/2;
            justify-self: center;
            list-style: none;
          }
          .intro {
            grid-area: 2/2;
            justify-self: center;
          }

          li {
            margin: 0 0 30px 0;
          }
          a:visited {
            color: 0c00ff;
          }

          a:hover {
            background: #d9d9d9;
          }

          a {
            color: #0c00ff;
          }
        `}
      </style>
    </>
  );
}
