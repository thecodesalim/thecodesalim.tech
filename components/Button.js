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
      textContent.current.textContent = props.text;
    } else {
      textContent.current.textContent = props.value;
    }
  };
  const variants = {
    close: { width: "10%" },
    open: {
      x: 0,
      y: -40,
      width: "35%",
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
        {props.text}
      </span>

      <style>
        {`
              .button {
                height: 50px;
                border-radius: 2px;
                color: #e1ad01;
                z-index: 2;  
                display: flex;
                flex-direction: row;
                margin-right: 0%;
              }

              .button:hover {
                cursor: pointer;
              }


              @media screen and (max-width: 600px) {
                .button {
                  margin-right: 10%;
                }
              }

              .buttonText {
                padding: 10px;
              }

            `}
      </style>
    </motion.div>
  );
}
