import { callApi } from '../src/api.js';

Page2.getInitialProps = async ({ query }) => {
  const text = query.text || 'none';
  const data = await callApi();
  return { text, data };
};

export default function Page2({ text, data }) {
  return (
    <div>
      <p>This is home page2.</p>
      <p>{`text: ${text}`}</p>
      <p>{`data is ${data}`}</p>
    </div>
  );
}
