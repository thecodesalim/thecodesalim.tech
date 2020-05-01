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

      <style jsx global>
        {`
          html {
            background: #ebecf0;
          }
        `}
      </style>
    </>
  );
}
