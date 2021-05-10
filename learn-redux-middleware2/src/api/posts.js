const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const posts = [
  {
    id: 1,
    title: 'ㄱ',
    body: 'ㄱㄱ'
  },
  {
    id: 2,
    title: 'ㄴ',
    body: 'ㄴㄴ'
  },
  {
    id: 3,
    title: 'ㄷ',
    body: 'ㄷㄷ'
  }
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async id => {
  await sleep(500);
  return posts.find(post => post.id === id);
};
