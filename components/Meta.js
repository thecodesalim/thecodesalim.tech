import Head from "next/head";

export default function Meta(props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/icon.svg" />
        <title>the code salim</title>
      </Head>

      <style>
        {`
         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
          html {
            background-color: #111111;
            color: #D3D3D3;
          }
        `}
      </style>
    </>
  );
}
