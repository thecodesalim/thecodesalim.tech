export default function Box(props) {
  return (
    <>
          <li>{props.text}</li>
          <div className="line"></div>
      <style jsx>
        {`
          .line {
            width: 320px;
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
