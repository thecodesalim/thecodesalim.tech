import Layout from "../components/MyLayout.js";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const [popUp, setPopUp] = React.useState(false);

  const variants = {
    open: { scale: 1 },
    closed: { scale: 0 },
  };

  const triggerPop = () => {
    setPopUp(!popUp);
    console.log(css);
  };
  let css = popUp ? "block" : "none";
  return (
    <Layout bg="#000000">
      <div>
        <button onClick={triggerPop}>About</button>
      </div>

      <motion.div
        drag
        dragConstraints={{
          top: -100,
          left: -100,
          right: 900,
          bottom: 300,
        }}
        variants={variants}
        animate={popUp ? "open" : "closed"}
      >
        <div className="popUp">
          <div className="fullBio">
            <span>
              I'm a graduate Software Engineer particularly interested in
              working with Javascript(React, React Native, Nodejs, Svelte)
            </span>
            <span>
              and designing(UI/UX) functional and beautiful interfaces. Years
              experience working with Java, Python, HTML, CSS and Adobe XD.
            </span>
            <span>
              I am an individual with great problem-solving and team-working
              skills. In my free time I prototype and develop video games using
              Unity.
            </span>
          </div>
        </div>
      </motion.div>
      <style jsx>
        {`
          .fullBio {
            padding: 20px;
            grid-row: 3;
          }

          .shape {
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background-color: orangered;
            margin: 10px;
          }
          a {
            color: white;
            display: inline-block;
            transition: transform 0.3s ease-out;
          }

          a:hover {
            transform: translate(3px, -5px);
          }

          .popUp {
            color: #757575;
            background-color: rgba(245, 245, 245, 0.98);
            margin: 50px;
            position: absolute;
            z-index: 3;
            border-radius: 5%;
            width: 500px;
            height: 500px;
          }
        `}
      </style>
    </Layout>
  );
}
