import { renderPictures } from './miniature.js';
import { openBigPicture } from './big-picture.js'; 

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
    container.addEventListener('click',(evt) => {
        const miniature = evt.target.closest('[data-miniature]');
        if(!miniature){
            return;
        }
        evt.preventDefault();
        
        const picture = pictures.find(
            (item) => item.id === +miniature.dataset.miniature
        );
        openBigPicture(picture);
    });
    renderPictures(pictures, container);
};

export { renderGallery };