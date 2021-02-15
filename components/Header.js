import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

const mainHeader = {
  gridColumn: 1 / 3,
  marginLeft: 10,
  gridRow: 5,
};

export default function Header() {
  return (
    <div style={mainHeader}>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>

      <style jsx>
        {`
          .mainHeader {
            marginLeft: 10,
            grid-row: 5,
            grid-column: 1 / 3,
          }
          a {
            margin-bottom: 15px;
            color: white;
            display: inline-block;
            transition: transform 0.3s ease-out;
          }

          a:hover {
            transform: translate(-3px, -5px);
          }
        `}
      </style>
    </div>
  );
}
