import { cardList } from './data.js';
// import { } from './.js';

// создаем функцию которая создает элемент на странице
function createElement(tagName) {
  return document.createElement(tagName);
}
// создаем функцию которая создаст кард с 4 параметрами id,likes,comments,url
function pictureGenerator(card) {
  // создаем див
  const pictureContainer = createElement('div');
  // добавляем диву атребут id = "picture"
  pictureContainer.setAttribute('id', 'picture');
  // создаем ссылку и добавляем href , class
  const pictureLink = createElement('a');
  pictureLink.setAttribute('href', '#');
  pictureLink.classList.add('picture');
  // создаем img с класом и всеми атребутами
  const pictureImage = createElement('img');
  pictureImage.classList.add('picture__img');
  pictureImage.setAttribute('src', card.url);
  pictureImage.setAttribute('width', '182');
  pictureImage.setAttribute('height', '182');
  pictureImage.setAttribute('alt', 'Случайная фотография');
  // создаем элемент р
  const pictureParagraf = createElement('p');
  pictureParagraf.classList.add('picture__info');
  // создаем первый спан
  const pictureFirstSpan = createElement('span');
  pictureFirstSpan.classList.add('picture__comments');
  pictureFirstSpan.innerText = card.comments;
  // создаем второй спан
  const pictureSecondSpan = createElement('span');
  pictureSecondSpan.classList.add('picture__likes');
  pictureSecondSpan.innerText = card.likes;
  // содираем матрешку.Владывае элементы по трафарету
  pictureParagraf.append(pictureFirstSpan);
  pictureParagraf.append(pictureSecondSpan);
  // ----------------------------------
  pictureLink.append(pictureImage);
  pictureLink.append(pictureParagraf);
  // =============================
  pictureContainer.append(pictureLink);

  return pictureContainer;
}
function addPicture () {
  const cards = cardList.map(pictureGenerator);
  console.log(cards);
}

export { addPicture };
