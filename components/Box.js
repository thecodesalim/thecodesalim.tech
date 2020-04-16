export default function Box() {
  return (
    <>
      <div className="box"></div>
      <style jsx>
        {`
          .box {
            height: 30vh;
            width: 30vw;
            background: yellow;
          }
        `}
      </style>
    </>
  );
}
