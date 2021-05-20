const friends = [
  { name: '정국', age: 25 },
  { name: '태형', age: 27 },
  { name: '지민', age: 27 },
  { name: '윤기', age: 29 },
  { name: '호석', age: 28 },
  { name: '남준', age: 28 }
];

const timelines = [
  { desc: '제주도는 어딜가도 너무 이쁘다...', likes: 200 },
  { desc: '알리오올리오 만들어 먹었다!!', likes: 2000 },
  { desc: '고양이는 정말 귀여워! ><', likes: 20000 },
  { desc: '운동을 할까?', likes: 200000 }
];

function makeDataGenerator(items) {
  let itemIndex = 0;

  return function getNextData() {
    const item = items[itemIndex % items.length];
    itemIndex += 1;
    return { ...item, id: itemIndex };
  };
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);
