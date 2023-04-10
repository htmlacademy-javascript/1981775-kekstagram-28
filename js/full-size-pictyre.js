import { generatorComments } from './full-size-picture-comments.js';

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

function pictureFullsizeEventWrapper(pictureContainer, card) {
  let qualityComments = 4;
  pictureContainer.addEventListener('click', () => {
    document.querySelector('.big-picture').classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
    document.querySelector('.social__comment-count').classList.add('hidden');
    document.querySelector('.comments-loader').classList.add('hidden');
    const comentsElements = generatorComments(card.comments, qualityComments);
    document.querySelector('.social__comments').replaceChildren(comentsElements);
    editFullSizePictureParammetrs(card);
    document.querySelector('.comments-loader').classList.remove('hidden');
    document.querySelector('.social__comment-count').classList.remove('hidden');
    if (qualityComments >= card.comments.length) {
      qualityComments = card.comments.length;
      document.querySelector('.social__comment-count').innerHTML = `<div class="social__comment-count"> ${qualityComments} из <span class="comments-count">${card.comments.length}</span> комментариев</div>`;
    } else {
      document.querySelector('.social__comment-count').innerHTML = `<div class="social__comment-count"> ${qualityComments} из <span class="comments-count">${card.comments.length}</span> комментариев</div>`;
    }
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
  document.querySelector('.social__footer-btn').addEventListener('click', () => {
    document.querySelector('.social__comment-count').classList.remove('hidden');
    document.querySelector('.comments-loader').classList.remove('hidden');
  });
  document.querySelector('.social__comments-loader').addEventListener('click', () => {
    qualityComments += 5;
    const comentsElements = generatorComments(card.comments, qualityComments);
    document.querySelector('.social__comments').replaceChildren(comentsElements);
    if (qualityComments >= card.comments.length) {
      qualityComments = card.comments.length;
    }else {
      document.querySelector('.social__comment-count').innerHTML = `<div class="social__comment-count"> ${qualityComments} из <span class="comments-count">${card.comments.length}</span> комментариев</div>`;
    }
  });
}

export { pictureFullsizeEventWrapper };
