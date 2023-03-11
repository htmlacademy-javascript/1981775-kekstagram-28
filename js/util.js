// создаем два рандомных числа a b
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
// создаем массив
const createCommentsArray = (commentsCount) => {
  const commentsArray = [];
  for (let i = 0; i < commentsCount; i++) {
    commentsArray.push(createComment);
  }
  return commentsArray;
};

export { createCommentsArray, getRandomInteger };
