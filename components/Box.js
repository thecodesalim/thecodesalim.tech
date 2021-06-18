import { motion } from "framer-motion";
export default function Box(props) {
  return (
    <>
      <span>{props.text}</span>
      <div className="line"></div>
      <style jsx>
        {`
          .line {
            width: ${props.width}%;
            height: 1px;
            background: white;
            margin-top: 10px;
            margin-bottom: 10px;
          }
        `}
      </style>
    </>
  );
}
