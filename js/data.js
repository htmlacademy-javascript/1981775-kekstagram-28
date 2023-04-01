import {getRandomInteger} from './util.js';
const PICTURE_COUNT = 25;
const LIKE_COUNT_MIN = 15;
const LIKE_COUNT_MAX = 200;
const COMMENT_COUNT = 20;
const AVATAR_COUNT = 10;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTIONS = [
  'Отдых и не только',
  'Как здорово,что все мы здесь, сегодня собрались',
  'Почему бы и нет',
  'Кто есле не мы',
  'Ловись рыбка большая и маленькая',
  'Я сново Я и кто это вообще такой',
  'В самую рань в полную срань',
];
const NAMES = ['Алексадр', 'Тимур', 'Иван', 'Трандуил', 'Илья', 'Олег'];

//  создаем коминтарии из 4 критерий (id, avatar, message, name)
const createComment = () => ({
  id: getRandomInteger(0, PICTURE_COUNT),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: MESSAGES[getRandomInteger(1, MESSAGES.length - 1)],
  name: NAMES[getRandomInteger(1, NAMES.length - 1)],
});
// создаем массив
const createCommentsArray = (commentsCount) => {
  const commentsArray = [];
  for (let i = 0; i < commentsCount; i++) {
    commentsArray.push(createComment());
  }
  return commentsArray;
};
// создаем одну карточку
const createCard = (index) => {
  const randomId = getRandomInteger(0, index);
  const randomDescriptionIndex = getRandomInteger(0, DESCRIPTIONS.length - 1); // это число
  const randomDescription = DESCRIPTIONS[randomDescriptionIndex];
  const randomMessageIndex = getRandomInteger(0, MESSAGES.length - 1);// это число
  const randomMessages = MESSAGES[randomMessageIndex];
  const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
  const randomName = NAMES[randomNameIndex];
  const randomUrlIndex = getRandomInteger(1, PICTURE_COUNT);
  const randomUrl = `photos/${randomUrlIndex}.jpg`;
  const randomAvatarIndex = getRandomInteger(1, AVATAR_COUNT);
  const randomAvatar = `img/avatar-${randomAvatarIndex}.svg`;

  const card = {
    id: randomId,
    url: randomUrl,
    description: randomDescription,
    likes: getRandomInteger(LIKE_COUNT_MIN, LIKE_COUNT_MAX),
    comments: createCommentsArray(getRandomInteger(1, COMMENT_COUNT)),
    avatar: randomAvatar,
    message: randomMessages,
    name: randomName,
  };
  return card;
};
// создаем моссив из карточек
function createCards() {
  const cards = [];
  for (let i = 0; i < PICTURE_COUNT; i++) {
    cards.push(createCard(i));
  }
  return cards;
}

export { createCards };
