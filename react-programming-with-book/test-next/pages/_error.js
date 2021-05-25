ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default function ErrorPage({ statusCode }) {
  return (
    <div>
      {statusCode === 404 && '페이지를 찾을 수 없다옹...'}
      {statusCode === 500 && '알 수 없는 에러가 발생했다옹...'}
      {!statusCode && '클라이언트에서 에러가 발생했다옹...'}
    </div>
  );
}
