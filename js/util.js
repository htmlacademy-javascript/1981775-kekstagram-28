const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createComment = () => ({
  id: getRandomInteger(0, ID_COUNT),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: MESSAGES[getRandomInteger(1, MESSAGES.length - 1)],
  name: NAMES[getRandomInteger(1, NAMES.length - 1)],
});

const createCommentsArray = (commentsCount) => {
  const commentsArray = [];
  for (let i = 0; i < commentsCount; i++) {
    commentsArray.push(createComment);
  }
  return commentsArray;
};

const createCard = (index) => {
  const randomId = getRandomInteger(0, index);
  const randomDescriptionIndex = getRandomInteger(0, DESCRIPTIONS.length - 1); // это число
  const randomDescription = DESCRIPTIONS[randomDescriptionIndex];
  const randomMessageIndex = getRandomInteger(0, MESSAGES.length - 1);// это число
  const randomMessages = MESSAGES[randomMessageIndex];
  const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
  const randomName = NAMES[randomNameIndex];
  const randomUrlIndex = getRandomInteger(1, ID_COUNT);
  const randomUrl = `photos/${randomUrlIndex}.jpg`;
  const randomAvatarIndex = getRandomInteger(1, AVATAR_COUNT);
  const randomAvatar = `img/avatar-${randomAvatarIndex}.svg`;

  const object = {
    id: randomId,
    url: randomUrl,
    description: randomDescription,
    likes: getRandomInteger(LIKE_COUNT_MIN, LIKE_COUNT_MAX),
    comments: createCommentsArray(getRandomInteger(1, COMMENT_COUNT)),
    avatar: randomAvatar,
    message: randomMessages,
    name: randomName,
  };
  return object;
};

let createCards = () => {
  const cards = [];
  for (let i = 0; i < ID_COUNT; i++) {
    cards += createCard(i + 1)
  }
  return cards
}
export {createCards, createCard, createCommentsArray, createComment, getRandomInteger};
