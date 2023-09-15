
import { generatePseudoData} from './data.js';
import { renderPictures } from './miniature.js';
import { renderGallery } from './galery.js';
import openForm from './form.js';
import { updateScale } from './scaling.js';
import { setUserFormSubmit } from './api-form.js';
// import applyEffect from './efect.js';


// renderPictures(generatePseudoData());

// renderGallery(generatePseudoData());

openForm();
updateScale();
// applyEffect();
setUserFormSubmit();


  const showAlert = (message) => {
    const alertContainer = document.createElement('div');
    alertContainer.style.zIndex = '100';
    alertContainer.style.position = 'absolute';
    alertContainer.style.left = '0';
    alertContainer.style.top = '0';
    alertContainer.style.right = '0';
    alertContainer.style.padding = '10px 3px';
    alertContainer.style.fontSize = '30px';
    alertContainer.style.textAlign = 'center';
    alertContainer.style.backgroundColor = 'red';
  
    alertContainer.textContent = message;
  
    document.body.append(alertContainer);
  
    setTimeout(() => {
      alertContainer.remove();
    }, 2000);
  }
  
  fetch('https://28.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((picture) => {
      renderGallery(picture);
    })
    .catch(() => {
      showAlert('Не удалось загрузить фотографии с сервира . Попробуйте ещё раз');
    });
    export {showAlert}