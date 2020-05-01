import Link from "next/link";
import Layout from "../components/MyLayout.js";
import Box from "../components/Box";

const linkStyle = {
  marginRight: 15,
};

export default function About() {
  return (
    <Layout
      bg="linear-gradient(
      90deg,
      rgba(63, 94, 251, 1) 0%,
      rgba(252, 70, 107, 1) 100%
    );"
    >
      <p className="name">Salim Abubakar</p>
      <p className="me">Software Engineer + Digital Designer</p>
      <div className="links">
        <a style={linkStyle} href="https://github.com/thecodesalim">
          Github
        </a>
        <a style={linkStyle} href="https://twitter.com/TheCodeSalim">
          Twitter
        </a>
      </div>
      <style jsx>
        {`
          .name {
            grid-row: 1;
            grid-column: 1;
            margin-left: 10px;
          }

          .me {
            justify-self: center;
            align-self: center;
            grid-row: 2;
            grid-column: 2;
          }

          a {
            color: white;
            display: inline-block;
            transition: transform 0.3s ease-out;
          }

          a:hover {
            transform: translate(3px, -5px);
          }

          .links {
            justify-self: end;
            grid-area: 4/3;
          }
        `}
      </style>
    </Layout>
  );
}
