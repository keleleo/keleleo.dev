import Head from 'next/head';

export default function HomeHeader() {
  return (
    <Head>
      <title>Keleleo</title>
      <meta name="author" content="Keleleo" />

      <meta charSet="UTF-8" />
      <meta name="description" content="Keleleo - Portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="og:title" property="og:title" content="Keleleo - Portfolio" />

      <meta property="og:title" content="Keleleo" />
      <meta
        property="og:description"
        content="Hi, my name is keleleo. I'm a full-stack programmer."
      />
      <meta property="og:url" content="https://www.keleleo.dev/" />
      <meta property="og:image" content="https://github.com/keleleo.png" />
      <meta property="og:type" content="website" />
    </Head>
  );
}
