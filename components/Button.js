import React from "react";
import { motion } from "framer-motion";

export default function Button(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const textContent = React.useRef();

  const triggerOpen = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      textContent.current.textContent = "about";
    } else {
      textContent.current.textContent += "fuck";
    }
  };
  const variants = {
    close: { width: "10%" },
    open: {
      width: "30%",
      height: "30%",
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
                margin: 5px;
                border-radius: 50px;
                background-color: rgba(245, 245, 245, 0.98);
                color: #757575;
                z-index: 2;
                position: absolute;
              }

              .buttonText {
                display: grid;
                justify-content: center;
                align-content: center;
              }


            `}
      </style>
    </motion.div>
  );
}
