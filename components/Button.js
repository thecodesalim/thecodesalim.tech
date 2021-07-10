import React from "react";
import { motion } from "framer-motion";

export default function Button(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const textContent = React.useRef();
  React.useEffect(() => {
    document.addEventListener("click", () => {
      console.log("yeah");
    });
  });
  const triggerOpen = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      textContent.current.textContent = "about";
      console.log(textContent);
    } else {
      textContent.current.textContent = ` I'm a graduate Software Engineer particularly interested in
      working with Javascript(React, React Native, Nodejs, Svelte)`;
    }
  };
  const variants = {
    close: { width: "20%" },
    open: {
      x: 40,
      y: -200,
      width: "50%",
      height: "50%",
      transition: {
        delay: 0.0,
      },
    },
  };
  return (
    <motion.div
      className="button"
      variants={variants}
      animate={isOpen ? "open" : "close"}
      onClick={triggerOpen}
    >
      <span className="buttonText" ref={textContent}>
        about
      </span>

      <style>
        {`
              .button {
                height: 50px;
                border-radius: 2px;
                background-color: #000;
                color: #757575;
                z-index: 2;
                position: absolute;
                display: flex;
                flex-direction:  row;
                justify-content: center;
                align-items: center;
              }

              .buttonText {
                padding: 10px;
              }


            `}
      </style>
    </motion.div>
  );
}
