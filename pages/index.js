import Link from "next/link";
import Layout from "../components/MyLayout.js";
import Box from "../components/Box";
import { motion } from "framer-motion";

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
          <Box text="Software Engineer & Designer" width={300} />
          <Box text="Keen in designing & building functional UIs" width={300} />
      </div>

      <div className="link">
        <Link href="https://github.com/thecodesalim">
          <a>
            <Box text="Github" width={10} />
          </a>
        </Link>
        <Link href="https://twitter.com/TheCodeSalim">
          <a>
            <Box text="Twitter" width={10} />
          </a>
        </Link>
      </div>

      <style>
        {`
          .mainPart {
            margin: 20px;
            grid-row: 2;
            
            display: grid;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr;
          }
          .linkHeader {
            font-style: italic;
          }
          .shape {
            height: 4rem;
            width: 4rem;
            border-radius: 50%;
            background-color: rgb(246, 247, 248);
            margin: 10px;
          }

          .name {
            grid-row: 2;
            margin: 10px;
          }

          .bio {
            margin: 20px;
            grid-row: 3;

            display: grid;
          }

          ul {
            list-style-type: none;
          }

          .link {
            margin: 20px;
            justify-content: space-around;
            grid-row: 4;
          }

          a {
            margin-left: 20px;
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

          @media screen and (max-width: 600px) {
            body {
              background-color: olive;
            }

            .link {
              grid-row: 4;
              grid-column: 1;
            }

          }
        `}
      </style>
    </Layout>
  );
}
