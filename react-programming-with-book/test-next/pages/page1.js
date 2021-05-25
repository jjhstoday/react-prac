import Head from 'next/head';
import Icon from '../static/icon.png';
import Link from 'next/link';

export default function Page1() {
  return (
    <div>
      <Link href='/page2'>
        <a>page2로 이동</a>
      </Link>
      <p>This is home page.</p>
      <img src={Icon} alt='' />
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
