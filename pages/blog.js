import Layout from "../components/MyLayout";
import Link from "next/link";
import Meta from "../components/Meta";

const PostLink = (props) => (
  <li>
    <h3>
      <Link href="/p/[id]" as={`/p/${props.id}`}>
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
          <PostLink id="Manifesto" title="Manifesto" />
          <PostLink
            id="Archive Research Review"
            title="Archive Research: Review"
          />
          <PostLink
            id="Archive Research Posters for London Underground
"
            title="Archive Research: Posters for London Underground
"
          />
          
          <PostLink
            id="Love Challenge Let s Get Coding"
            title="Love Challenge Let's Get Coding"
          />
          <PostLink id="Brand You M S Food" title="Brand You: M&S Food" />
          <PostLink
            id="Timeline Journey into Streetwear"
            title="Timeline: Journey into Streetwear"
          />
          <PostLink id="FCReview" title="First Cut: Review" />
          <PostLink id="FCResearch" title="First Cut: Research" />
          <PostLink id="FCChoice" title="First Cut: Idea" />
          <PostLink id="Visual Statistics" title="Visual Statistics" />
          <PostLink
            id="International Pedagogy How Far?"
            title="International Pedagogy: How Far?"
          />
        </ul>
      </div>
      <style jsx global>
        {`
          html {
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          }
          div {
            height: 98vh;
            width: 99vw;
            background-color: #ebecf0;
            display: grid;
            grid-template-rows: 0.5fr 0.5fr 3fr;
            grid-template-columns: 0.5fr 3fr 0.5fr;
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
