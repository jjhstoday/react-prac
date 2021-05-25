import Head from 'next/head';

export default function Page1() {
  return (
    <div>
      <p>This is home page.</p>
      <img src='/static/icon.png' alt='' />
      <Head>
        <title>page1</title>
      </Head>
      <Head>
        <meta name='description' content='hello my cat!' />
      </Head>
      <style jsx>{`
        p {
          color: purple;
          font-size: 18pt;
        }
      `}</style>
    </div>
  );
}