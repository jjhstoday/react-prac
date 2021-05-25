import Head from 'next/head';
import Icon from '../static/icon.png';
import { add } from '../src/util';

export default function Page1() {
  return (
    <div>
      <p>{`10 + 20 = ${add(10, 20)}`}</p>
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
