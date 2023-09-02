const picturesContainer = document.querySelector('.pictures');
const sample = document.querySelector('#picture').content.querySelector('.picture');

const createSample = (picture) => {
    const cloneSample = sample.cloneNode(true);
    cloneSample.querySelector('.picture__img').src = picture.url;
    cloneSample.querySelector('.picture__img').alt = picture.description;
    cloneSample.querySelector('.picture__comments').textContent = picture.comments.length;
    cloneSample.querySelector('.picture__likes').textContent = picture.likes;
    cloneSample.dataset.miniature = picture.id;
    return cloneSample;
};
const renderPictures = (picturesData) => {
    const fragment = document.createDocumentFragment();
    picturesData.forEach(picture => {
        const newPicture = createSample(picture);
        fragment.appendChild(newPicture);
    });
    picturesContainer.appendChild(fragment);
};

export { renderPictures };






