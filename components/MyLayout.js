import Header from "./Header";
import Meta from "./Meta";

import { motion } from "framer-motion";

export default function Layout(props) {
  return (
    <>
      <Meta />
      <motion.div
        className="layoutStyle"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        {props.children}
        {/* <Header /> */}
        <style>
          {`
            :root {
              background-color: #111111;
            }
            body {
              background: black;
              font-weight: 300;
            }
            .layoutStyle {
              font-family: 'Inter', sans-serif;
              background: ${props.bg};
              margin: 0;
              padding: 0;
              display: grid;
              height: 98vh;
              grid-template-rows: 0.5fr 1fr 1fr 1fr 1fr; 
              grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr;
              color: #D3D3D3;
            }
          `}
        </style>
      </motion.div>
    </>
  );
}
