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
           @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');
            :root {
              background-color: rgb(246, 247, 248);
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
              grid-template-rows: 0.5fr 1fr 1fr 1fr; 
              color: white;
            }
          `}
        </style>
      </motion.div>
    </>
  );
}
