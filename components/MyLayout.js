import Header from "./Header";
import Meta from "./Meta";

export default function Layout(props) {
  return (
    <>
      <Meta />
      <div className="layoutStyle">
        <Header />
        {props.children}
        <style jsx>
          {`
            @import url("https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap");
            :root {
              background: black;
            }
            body {
              background: black;
            }

            .layoutStyle {
              font-family: Futura;
              
              background: ${props.bg};
              margin: 0;
              padding: 0;
              border: 1px solid rgb(246, 247, 248);
              display: grid;
              height: 98vh;
              width: 90wh;
              grid-template-rows: 1fr 1fr 1fr 0.1fr;
              grid-template-columns: 1.5fr 2fr 1.5fr;
              color: white;
            }
          `}
        </style>
      </div>
    </>
  );
}
