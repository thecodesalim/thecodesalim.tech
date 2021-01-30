import Link from "next/link";
import Layout from "../components/MyLayout.js";
import Box from "../components/Box";

const linkStyle = {
  marginRight: 15,
};

export default function About() {
  return (
    <Layout bg="#000000">
      <div className="mainPart">
        <div className="shape"></div>
        <span className="name">Salim Abubakar</span>
      </div>
      <div className="bio">
        <ul>
          <Box text="Software Engineer & Designer" />
          <Box text="Keen in designing & building functional UIs" />
        </ul>
      </div>

      <div className="link">
        <ul>
        <Link href='https://twitter.com/TheCodeSalim' passHref><a><Box text="Github" /></a></Link>
        <Link href='https://twitter.com/TheCodeSalim' passHref><a><Box text="Twitter" /></a></Link>
        </ul>
      </div>

      <style jsx>
        {`
          .mainPart {
            margin: 20px;
            grid-row: 1;
            grid-column: 1;
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: 1fr;
          }
          .shape {
            height: 50px;
            width: 50px;
            background-color: #ffff;
            position: absolute;
            top: 60px;
            left: 140px;
          }

          .name {
            position: absolute;
            top: 80px;
            left: 200px;
          }
          .bio {
            grid-row: 2;
            grid-column: 1;
          }

          ul {
            list-style-type: none;
          }

          .link {
            grid-row: 2;
            grid-column: 2;
          }

          a {
            text-decoration: none;
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
