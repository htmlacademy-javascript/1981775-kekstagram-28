import { createCards } from './data.js';

const bigPicture = document.querySelector('.big-picture').classList.remove('.hidden');

function pictureGenerator(card) {
  const pictureContainer = document.createElement('div');
  pictureContainer.classList.add('big-picture__social', 'social');
  const pictureDownConteiner = document.createElement('div');
  pictureDownConteiner.classList.add('social__header');
  const pictureImage = document.createElement('img');
  pictureImage.classList.add('social__picture');
  pictureImage.setAttribute('src', card.url);
  pictureImage.setAttribute('alt', card.avatar);
  pictureImage.setAttribute('width', 35);
  pictureImage.setAttribute('height', 35);
  const pictureCaption = document.createElement('p');
  pictureCaption.classList.add('social__caption');
  pictureCaption.innerText = card.description;
  const picturelikes = document.createElement('p');
  picturelikes.classList.add('social__likes');
  picturelikes.innerText = 'Нравится';
  const pictureSpan = document.createElement('span');
  pictureSpan.classList.add('likes-count');
  pictureSpan.innerText = 356;

  picturelikes.append(pictureSpan);
  pictureDownConteiner.append(pictureImage);
  pictureDownConteiner.append(pictureCaption);
  pictureDownConteiner.append(picturelikes);
  pictureContainer.append(pictureDownConteiner);

  return pictureContainer;
}


function pictureFullsizeEventWrapper(props) {
  const fullSizePicture = pictureGenerator(props.card);
  props.target.addEventListener('click', () => {
    console.log(props.card.id);
  });

}
export { pictureFullsizeEventWrapper };
