import Link from "next/link";
import Layout from "../components/MyLayout.js";
import Box from "../components/Box";
import { motion } from "framer-motion";

const linkStyle = {
  marginRight: 15,
};

export default function About() {
  return (
    <Layout bg="#000000">
      <div className="mainPart">
        <motion.div
          className="shape"
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          animate={{
            scale: [1, 1.5, 1, 1.5, 1],
            transition: {
              delay: 0.8,
            },
          }}
        ></motion.div>
        <span className="name">Salim Abubakar</span>
      </div>

      <div className="bio">
        <ul>
          <Box text="Software Engineer & Designer" width={300} />
          <Box text="Keen in designing & building functional UIs" width={300} />
        </ul>
      </div>

      <div className="link">
        <ul>
          <Box className="linkHeader" text="Links" width={0}/>
          <li>
            <Link href="https://twitter.com/TheCodeSalim">
              <a>
                <Box text="Github" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/TheCodeSalim">
              <a>
                <Box text="Twitter" />
              </a>
            </Link>
          </li>
        </ul>
      </div>

      <style>
        {`
          .mainPart {
            margin: 20px;
            grid-row: 2;
            grid-column: ;
            justify-items: center;
            display: grid;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr;
          }
          .linkHeader {
            font-style: italic;
          }
          .shape {
            width: 0;
            height: 0;
            border-left: 25px solid transparent;
            border-right: 25px solid transparent;
            border-bottom: 50px solid #ffff;
          }

          .name {
            grid-row: 2;
          }
          .bio {
            grid-row: 3;
            grid-column: ;
          }

          ul {
            list-style-type: none;
          }

          .link {
            grid-row: 3;
            position: relative;
            grid-column: ;
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
            grid-area: 4;
          }
        `}
      </style>
    </Layout>
  );
}
