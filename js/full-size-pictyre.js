import { commentsElement } from './full-size-picture-comments.js';

const bigPicture = document.querySelector('.big-picture');
bigPicture.classList.remove('.hidden');

function editFullSizePictureParammetrs(card) {
  const fullSizePicture = bigPicture.querySelector('.big-picture__img > img');
  fullSizePicture.setAttribute('src', card.url);

  const like = bigPicture.querySelector('.likes-count');
  like.innerText = card.likes;

  const comment = bigPicture.querySelector('.comments-count');
  comment.innerText = card.comments.length;

  const description = bigPicture.querySelector('.social__caption');
  description.innerText = card.description;
}

function pictureFullSizeEventWrapper(pictureContainer, card) {
  const commandsEvent = handelFullSizePictureOpen(pictureContainer, card);
  handelPictureFullSizeClose(commandsEvent);

}

function setFullsizePictureParrametrs(card) {
  editFullSizePictureParammetrs(card);
  return commentsElement(card.comments);
}

function handelFullSizePictureOpen(pictureContainer, card) {
  pictureContainer.addEventListener('click', () => {
    document.querySelector('.big-picture').classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
    return setFullsizePictureParrametrs(card);
  });
}

function handelPictureFullSizeClose(removeEvent) {
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      document.querySelector('.big-picture').classList.add('hidden');
      document.querySelector('body').classList.remove('modal-open');
      document.querySelector('.social__comments-loader').removeEventListener('click', removeEvent);
    }
  });
  document.querySelector('.big-picture__cancel').addEventListener('click', () => {
    document.querySelector('.big-picture').classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    document.querySelector('.social__comments-loader').removeEventListener('click', removeEvent);
  });
}

export { pictureFullSizeEventWrapper };
