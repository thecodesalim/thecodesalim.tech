import Header from "./Header";
import Meta from "./Meta";

const layoutStyle = {
  fontFamily: "Futura",
  background: "rgb(63,94,251)",
  background:
    "linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
  margin: 20,
  padding: 20,
  border: "1px solid white",
  display: "grid",
  height: "90vh",
  width: "90wh",
  gridTemplateRows: "1fr 1fr 1fr 0.1fr",
  gridTemplateColumns: "1fr 1fr 3fr 1fr 1fr",
  color: "white",
};

export default function Layout(props) {
  return (
    <section>
      <Meta />
      <div style={layoutStyle}>
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
          `}
        </style>
      </div>
    </section>
  );
}
