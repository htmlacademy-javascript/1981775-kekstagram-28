import { generatorComments } from './full-size-picture-comments.js';

const bigPicture = document.querySelector('.big-picture');
bigPicture.classList.remove('.hidden');

function editFullSizePictureParammetrs(card) {
  const fullSizePicture = bigPicture.querySelector('.big-picture__img > img');
  fullSizePicture.setAttribute('src', card.url);

  const like = bigPicture.querySelector('.likes-count');
  like.innerText = card.likes;

  const comment = bigPicture.querySelector('.comments-count');
  comment.innerText = card.comments;

  const description = bigPicture.querySelector('.social__caption');
  description.innerText = card.description;
}

function pictureFullsizeEventWrapper(pictureContainer, card) {
  pictureContainer.addEventListener('click', () => {
    document.querySelector('.big-picture').classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
    document.querySelector('.social__comment-count').classList.add('hidden');
    document.querySelector('.comments-loader').classList.add('hidden');
    document.querySelector('.social__comments').replaceChildren(generatorComments(card.comments));
    const comentsElements = generatorComments(card.comments);
    document.querySelector('.social__comments').replaceChildren(comentsElements);
    editFullSizePictureParammetrs(card);
  });
  pictureContainer.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      document.querySelector('.big-picture').classList.add('hidden');
      document.querySelector('body').classList.remove('modal-open');
    }
  });
  document.querySelector('.big-picture__cancel').addEventListener('click', () => {
    document.querySelector('.big-picture').classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  });
}

export { pictureFullsizeEventWrapper };
