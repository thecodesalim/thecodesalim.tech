import Link from "next/link";
import Layout from "../components/MyLayout.js";
import Box from "../components/Box";
import Header from "../components/Header";
import Button from "../components/Button";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout bg="#111111">
      <div className="mainPart">
        <span className="name">Salim Abubakar</span>
      </div>

      <div className="bio">
        <Box text="Software Engineer & Designer" width={20} />
        <Box text="Keen in designing & building functional UIs" width={20} />
      </div>

      <div className="link">
        <Link href="https://github.com/thecodesalim">
          <a>
            <motion.div
              whileHover={{ scale: 1.1, x: -20 }}
              whileTap={{ scale: 0.9 }}
            >
              <Box text="Github" width={10} />
            </motion.div>
          </a>
        </Link>

        <Link href="https://twitter.com/TheCodeSalim">
          <a>
            <motion.div
              whileHover={{ scale: 1.1, x: 20 }}
              whileTap={{ scale: 0.9 }}
            >
              <Box text="Twitter" width={10} />
            </motion.div>
          </a>
        </Link>
      </div>
      {/* <Header /> */}
      <div className="open-viewer">
        <Button />
      </div>
      <style>
        {`
          .open-viewer{
            grid-row: 1; 
          }
          .mainPart {
            display: flex;
            flex-direction:  row;
            align-items: flex-end;
            grid-row: 2;      
          }
          .linkHeader {
            font-style: italic;
          }

          .name {
            font-weight: 400;
            grid-row: 2;
            margin: 10px;
            margin-left: 20px;
          }

          .bio {
            margin: 20px;
            grid-row: 3;
          }

          ul {
            list-style-type: none;
          }

          .link {
            margin: 20px;
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
            // transform: translate(3px, -5px);
          }

          .links {
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
