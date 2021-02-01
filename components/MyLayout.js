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
        <Header />
        {props.children}
        <style>
          {`
           @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap');
            :root {
              background: #ffff;
            }
            body {
              background: black;
            }
            .layoutStyle {
              font-family: 'Inter', sans-serif;
              
              background: ${props.bg};
              margin: 0;
              padding: 0;
              border: 1px solid orangered;
              display: grid;
              height: 97.5vh;
              grid-template-rows: 1fr 1fr 1fr 1fr; 
              color: white;
            }
          `}
        </style>
      </motion.div>
    </>
  );
}
