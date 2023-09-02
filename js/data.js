import { getRandomElement, getRandomInteger, generateId } from "./util.js";


const PICTURE_COUNT = 25;
const LIKE_COUNT_MIN = 15;
const LIKE_COUNT_MAX = 200;
const COMMENT_COUNT = 20;
const AVATAR_COUNT = 6;
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

const createComment = () => {
    return {
        id: generateId(),
        avatar: `img/avatar-${getRandomInteger(0, AVATAR_COUNT)}.svg`,
        message: getRandomElement(MESSAGES),
        name: getRandomElement(NAMES),
    }
}

const createPhotoDescription = i => {
    return {
        id: i + 1,
        url: `photos/${i + 1}.jpg`,
        description: getRandomElement(DESCRIPTIONS),
        likes: getRandomInteger(LIKE_COUNT_MIN, LIKE_COUNT_MAX),
        comments: Array.from({ length: getRandomInteger(0, COMMENT_COUNT) }, createComment),
    };

};

function generatePseudoData() {
    const photos = [];
    for (let i = 0; i < PICTURE_COUNT; i++) {
        photos.push(createPhotoDescription(i));
    };
    return photos
}
export { generatePseudoData }